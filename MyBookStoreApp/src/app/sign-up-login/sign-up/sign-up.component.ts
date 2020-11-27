import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginSignupServiceService } from 'src/app/login-signup-service.service';
import { Language } from '../../Enums/Language';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  hide1 = true;
  hide2 = true;
  FirstNameId: string;
  LastNameId: string;
  UserNameId: string;
  PasswordId: string;
  RepeatPasswordId: string;
  selectedLanguage: string;
  EmailId: string;
  PhoneNumberId: number;
  userNames: string[];
  existUsernameFlag: boolean = false;
  passwordFlag: boolean = false;
  language: Array<string> = [];
   firstnameFormControl = new FormControl('', [
    Validators.required
  ]);
  lastnameFormControl = new FormControl('', [
    Validators.required
  ]);
  usernameFormControl = new FormControl('', [
    Validators.required,
    //this.checkUserExists()
  ]);
  phonenumberFormControl = new FormControl('', [
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
  constructor(private _signUpservice: LoginSignupServiceService , private router: Router) { }

  ngOnInit(): void {
     //this.userNames = ["admin","reena"];
    // Getting usernames from server
      this._signUpservice.getUserNames().subscribe(response => this.userNames = response);
    // Getting existing Language from Enum
      // tslint:disable-next-line: forin
      for (let enumMember in Language) {
        this.language.push(enumMember);
      }

      //console.log(this.language);
        this.usernameFormControl.setValidators([Validators.required,
        this.checkUserExists()]);
        this.usernameFormControl.updateValueAndValidity();
        this.repeatpasswordFormControl.setValidators([Validators.required,
        this.passwordCheck()]);
        this.repeatpasswordFormControl.updateValueAndValidity();
    }
  submit(): void{
    //console.log( this.FirstNameId , this.LastNameId, this.UserNameId,this.PasswordId,this.RepeatPasswordId,this.selectedLanguage,this.EmailId,this.PhoneNumberId);
     let registerUser = {
      firstName: this.FirstNameId ,
      lastName: this.LastNameId ,
      userName: this.UserNameId ,
      password: this.PasswordId ,
      isAdmin: 0 ,
      books: [],
      language: Language[this.selectedLanguage] ,
      mobileNumber: this.PhoneNumberId ,
      emailId: this.EmailId
     };
     
     let NavigateCallBack = (response: number) => {
       if(!response){
         this.router.navigate(["login"]);
       }else{
         console.log("error in registering data!!");
       }
     };

     this._signUpservice.registerUser(registerUser, NavigateCallBack).subscribe();

    

     
  }

  checkUserExists(): ValidatorFn{
     
    return (control: AbstractControl): ValidationErrors => { 
    return (this.userNames.includes(control.value)) ? {'existUsernameFlag': true} : null;
      
    }
    }

  passwordCheck(): ValidatorFn{
    return (control: AbstractControl): ValidationErrors => {
    return (this.PasswordId !== control.value) ? {'passwordnotmatch' : true} : null;
  }
}
  
  onselectLanguage(ev): void{
console.log(ev);
  }

}
