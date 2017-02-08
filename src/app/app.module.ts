import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FrontComponent } from './front/front.component';
import { MediaService } from './services/media.service';
import { TopBarComponent } from './top-bar/top-bar.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UploadComponent } from './upload/upload.component';
import { MediaplayerComponent } from './mediaplayer/mediaplayer.component';

const routeConfig = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/login'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },

  {
    path: 'front',
    component: FrontComponent
  },
   {
    path: 'upload',
    component: UploadComponent
  },
   {
    path: 'mediaplayer/:fileId',
    component: MediaplayerComponent
   }
];

@NgModule({
  declarations: [
    AppComponent,
    FrontComponent,
    TopBarComponent,
    RegisterComponent,
    LoginComponent,
    UploadComponent,
    MediaplayerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routeConfig)
  ],
  providers: [MediaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
