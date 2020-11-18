import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
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
    
    let ValidationCallBack = (response: Users|null): void => {
      (response) ? this.userInfo = response: this.userInfo = undefined;
      console.log(this.userInfo);

      if (this.userInfo)
        {
          // going to home module 
          // Router.navigate([Home,this.userInfo]); or
          // Router.navigateByUrl("/${Home}/${userInfo}");
          // Angular gaurd canLoad  

          this.router.navigate(['/', 'home'], {queryParams: {id: this.userInfo.Id}}).then(
            nav => { console.log(nav)} ,
            err => { console.log(err)}
          );

        }
    }

    this._loginService.validateAndLogin(this.UserId, this.pwd, ValidationCallBack).subscribe();

  }
  constructor(private _loginService: LoginSignupServiceService, private router: Router) { }

  ngOnInit(): void {
  }

}
