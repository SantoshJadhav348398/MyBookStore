import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormsModule } from '@angular/forms';
import { Users } from 'src/app/Models/Users';
import { LoginSignupServiceService } from '../../login-signup-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   hide = true;
   UserId:string;
   pwd:string;
   userInfo:Users;
   //UserValidation: boolean;

  usernameFormControl = new FormControl('', [
    Validators.required
  ]);
  passwordFormControl = new FormControl('', [
    Validators.required
  ]);

  OnSubmit():void{
    //console.log(this.UserId, this.pwd);
    
    let ValidationCallBack = (response: Users|null):void => {
      (response) ? this.userInfo = response: this.userInfo = undefined;
      console.log(this.userInfo);

      if (this.userInfo)
        {
          // going to home module 
          // Router.navigate([Home,this.userInfo]); or
          // Router.navigateByUrl("/${Home}/${userInfo}");
          // Angular gaurd canLoad  
        }
    }

    this._loginService.validateAndLogin(this.UserId, this.pwd, ValidationCallBack).subscribe();

  }
  constructor(private _loginService: LoginSignupServiceService) { }

  ngOnInit(): void {
  }

}
