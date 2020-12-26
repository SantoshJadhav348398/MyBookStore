import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Book } from './Models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

url:string ="https://localhost:5001/api";

httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
  constructor(private http : HttpClient) { }

 public getBookListByIds() : Observable<Book[]>{
   this.url = "https://localhost:5001/api/Books";
    return this.http.get<Book[]>(this.url).pipe(
      tap((response:Book[])=> console.log(response))
    );
 } 
}
