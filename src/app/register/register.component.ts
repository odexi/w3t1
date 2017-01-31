import { MediaService } from './../services/media.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  private username: string = '';
  private password: string = '';
  private email: string = '';

  constructor(private mediaService: MediaService) { }

  ngOnInit() {
  }

  register = () => {
    const user = {
      username: this.username,
      password: this.password,
      email: this.email
    };
    this.mediaService.setUser(user);
    this.mediaService.register();
  }

}
