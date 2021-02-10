import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDetails } from './Models/user-details';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url:string ="https://localhost:5001/api";
  httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
  constructor(public http: HttpClient) { }

  GetUserDetails(id:number):Observable<UserDetails>
  {
     this.url =  "https://localhost:5001/api/LoginRegister/GetUserDetails?id="+id;

     return this.http.get<UserDetails>(this.url);
  }
}
