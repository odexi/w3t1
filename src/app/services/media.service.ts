import { Router } from '@angular/router';
// import { MediaService } from './media.service';
import { Injectable } from '@angular/core';
import {Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MediaService {

  private url: String = 'http://media.mw.metropolia.fi/wbma';

  private user: any = {};
  private formData = new FormData();
  private token: string = '';

  constructor(private http: Http, private router: Router) { }

   setUser = (user) => {
    this.user = user;
    console.log(this.user);
  }
  setFormData = (FormData) => {
    this.formData = FormData;
    // this.formData.append('file', FormData.file);
    console.log(this.formData);
  }

  login = () => {
    return this.http.post(this.url + '/login', this.user)
     .subscribe(
       resp => {
         console.log(resp.json());
         // convert user object to string and save userdata to local storage
         this.user = resp.json().user;
         this.user.token = resp.json().token;
         localStorage.setItem('user', JSON.stringify(this.user));
         // navigate to front
         this.router.navigate(['front']);
       },
       error => {
         console.log(error);
       }
     );
  }

  register = () => {
    return this.http.post(this.url + '/users', this.user)
     .subscribe(
       resp => {
         const originalData = this.user;
         const dataFromServer = resp.json();

         this.user = dataFromServer;
         console.log(resp.json());
         // convert user object to string and save userdata to local storage
         delete originalData['email'];
         this.setUser(originalData);
         this.login();
       },
       error => {
         console.log(error);
       }
     );
  }
  upload = (formContent: any) => {
    this.token = JSON.parse(localStorage.getItem('user')).token;
    console.log(this.token);
    return this.http.post(this.url + '/media?token=' + this.token, formContent)
    .map(
        resp => {
          resp.json();
        },
        error => {
          console.log(error);
        }
      );
  }
  getNew = () => {
    return this.http.get(this.url + '/media?limit=100');

  }

  getMedia = (fileId) => {
    return this.http.get(this.url + '/media/' + fileId)
    .map(
      res =>
       res.json()
    );
  }
}
