import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { RouterModule } from '@angular/router';
import { SignuploginRoutingModule } from './signuplogin-routing.module';



@NgModule({
  declarations: [LoginComponent, SignUpComponent],
  imports: [
    CommonModule,
    RouterModule,
    SignuploginRoutingModule
  ],
  exports: [
    LoginComponent,
    SignUpComponent
  ]
})
export class SignUpLoginModule { }
