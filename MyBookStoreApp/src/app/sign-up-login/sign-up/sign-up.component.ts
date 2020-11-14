import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { LoginSignupServiceService } from 'src/app/login-signup-service.service';
import { Language } from '../../Enums/Language'
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  hide1 = true;
  hide2 = true;
  userNames: string[];
  language: Array<string> = [];
  usernameFormControl = new FormControl('', [
    Validators.required
  ]);
  passwordFormControl = new FormControl('', [
    Validators.required
  ]);
  repeatpasswordFormControl = new FormControl('', [
    Validators.required
  ]);
  email = new FormControl('', [Validators.required, Validators.email]);
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  constructor(private _signUpservice: LoginSignupServiceService) { }

  ngOnInit(): void {

    // Getting usernames from server
      this._signUpservice.getUserNames().subscribe(response => this.userNames = response);
    
    // Getting existing Language from Enum
    for (var enumMember in Language) {
        this.language.push(enumMember);
      }

      console.log(this.language);
    }
  

}
