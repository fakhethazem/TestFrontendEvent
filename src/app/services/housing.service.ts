import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IProperty } from '../property/event-card/IProperty.interface';
import { Observable } from 'rxjs';
import { AppComponent } from '../app.component';
import { Event } from '../model/Event';



@Injectable({
  providedIn: 'root'
})
export class HousingService {
url=AppComponent.urlConfig;
url1=AppComponent.urlconfig1;
url2=AppComponent.urlconfig2;

  constructor(private http:HttpClient) { }


 /* getProperty(id:number){
    return this.getAllProperties().pipe(
      map(propertiesArray=>{
        return propertiesArray.find(p =>p.Id === id);

      })

    );
  }*/
  getEventById (id:string) 
  {
    let params = new HttpParams();
   
    return this.http.get<any>(this.url+`${id}`, { params: params });
  }

   getAll() : Observable<any>
  {
    let params = new HttpParams();
    return this.http.get<any>(this.url, { params: params });
  }

  updateEvent(event:Event , id:string) : Observable<any>
  {
    
    return this.http.put<any>(this.url+`${id}`,event);
  }


  pushRate(id:string , note:number) : Observable<any>
  {
    
    return this.http.put<any>(this.url1+`${id}` +`/${note}`,null);
  }

  getAvgRate (id:string) : Observable<any>
  {
    
   
    return this.http.get<any>(this.url2+`${id}`);
  }

 deleteEvent( id:string) : Observable<any>
  {
    let params = new HttpParams();
    return this.http.delete<any>(this.url+`${id}`);
  }

  addEvent(event:Event) : Observable<any>
  {
    
    return this.http.post<any>(this.url,event);
  }


  
  addPService(prop:IProperty) {
    localStorage.setItem('newProp', JSON.stringify(prop));
  }
}

