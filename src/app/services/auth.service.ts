import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const AUTH_API = 'http://127.0.0.1:8080/authenticate';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor(private http: HttpClient) { }

authUser(user:any){
let UserArray = [];
if (localStorage.getItem('Users')){
  UserArray = JSON.parse(localStorage.getItem('Users'));
}
return UserArray.find (p => p.userName === user.userName && p.password === user.password) ;{
  
}
}

login(user:any): Observable<any> {
  let HTTPOptions:Object = {

    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    }),
    responseType: 'text'
 }
  return this.http.post<{access_token:  string}>(AUTH_API ,user, HTTPOptions);
}

}
