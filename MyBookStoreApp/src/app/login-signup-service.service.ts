import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Users } from './Models/Users';

@Injectable({
  providedIn: 'root'
})
export class LoginSignupServiceService {

  constructor(public http: HttpClient) { }

  url:string ="https://localhost:5001/api";
  
  httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

  validateAndLogin(userId: string, pwd:string, ValidationCallBack):Observable<Users|null>
  {
      let loginData = {
        Id: userId,
        password: pwd
      }
        this.url =  "https://localhost:5001/api/LoginRegister/ValidateUsers"
      //console.log(url);

      return this.http.post<Users|null>(this.url, loginData, this.httpOptions).pipe(
        tap((response:Users|null) => ValidationCallBack(response))
        /* tap( (response: Users|null)=> (response) ? console.log(response): console.log("something went wrong") 
        ) */
      );

  }

  getUserNames():Observable<string[]>
  {
    this.url = "https://localhost:5001/api/LoginRegister/GetUserNames";

    return this.http.get<string[]>(this.url).pipe(
      tap((response:string[])=> console.log(response))
    );
  }

}
