import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginSignupServiceService {

  constructor(public http: HttpClient) { }

  url:string ="https://localhost:5001/api";
  
  httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

  validateAndLogin(userId: string, pwd:string):Observable<boolean>
  {
      let loginData = {
        Id: userId,
        password: pwd
      }
        this.url +=  "/LoginRegister/ValidateUsers"
      //console.log(url);

      return this.http.post<boolean>(this.url, loginData, this.httpOptions).pipe(
        tap( (value:boolean)=> (value) ? console.log("successfully logged in"): console.log("something went wrong") 
        )
      );

  }
}
