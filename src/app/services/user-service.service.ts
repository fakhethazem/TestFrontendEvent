import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { User } from '../model/user';
import { AppComponent } from '../app.component';
import { Observable } from 'rxjs';
import { Client } from '../model/UserModel';
const baseUrl = 'http://localhost:8080/';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  
constructor(private http:HttpClient) { }
  addUser(user:User){
  let users=[];
  if(localStorage.getItem('Users')){
    users = JSON.parse(localStorage.getItem('Users'));
    users = [user,...users];
  }else {
    users= [user];
  }
  localStorage.setItem('Users', JSON.stringify(users));
}

registerPart(user: User): Observable<any> {
  return this.http.post<User>( `${baseUrl}clients/Particulier`, user);
}

registerPro(user: User): Observable<any> {
  return this.http.post<User>( `${baseUrl}clients/temp`, user);
}

registerProByAdmin( id:number): Observable<any> {
  return this.http.post( `${baseUrl}clients/professionel/${id}`, null);
}

getClient(email:any): Observable<any>  {
  return this.http.get<any>( `${baseUrl}clients/${email}`);
}

getPro(): Observable<any> {
  return this.http.get<User>( `${baseUrl}clients/temp`);
}

}
