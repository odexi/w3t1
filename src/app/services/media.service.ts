import { Router } from '@angular/router';
// import { MediaService } from './media.service';
import { Injectable } from '@angular/core';
import {Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MediaService {

  private url: String = 'http://media.mw.metropolia.fi/wbma';

  private user: any = {};

  

  constructor(private http: Http, private router: Router) { }

   setUser = (user) => {
    this.user = user;
    console.log(this.user);
  }

  login = () => {
    return this.http.post(this.url + '/login', this.user)
     .subscribe(
       resp => {
         console.log(resp.json());
         // convert user object to string and save userdata to local storage
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
         delete originalData["email"];
         this.setUser(originalData);
         this.login();
       },
       error => {
         console.log(error);
       }
     );
  }
}
