import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormsModule } from '@angular/forms';
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
   result:boolean;
  usernameFormControl = new FormControl('', [
    Validators.required
  ]);
  passwordFormControl = new FormControl('', [
    Validators.required
  ]);

  OnSubmit():void{
    console.log(this.UserId, this.pwd);
    

    this._loginService.validateAndLogin(this.UserId, this.pwd).subscribe(response => this.result = response)

  }
  constructor(private _loginService: LoginSignupServiceService) { }

  ngOnInit(): void {
  }

}
