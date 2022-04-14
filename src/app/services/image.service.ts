import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { AppComponent } from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  url=AppComponent.urlConfig;
  constructor(private http:HttpClient) { }

  uploadFile(file: File )
  {
    const formData = new FormData();
    formData.append('file',  file);
    return this.http.post(this.url+'fileUpload', formData);
  }

  async deleteFile(filename: string, type: string)
  {
    return this.http.delete(this.url+'deleteFile/' + filename + '.' + type).toPromise();
  }
}
