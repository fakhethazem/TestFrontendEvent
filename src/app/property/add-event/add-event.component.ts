import { Component, OnInit,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { HousingService } from 'src/app/services/housing.service';
import { UserServiceService } from 'src/app/services/user-service.service';
import { ImageService } from 'src/app/services/image.service';
import { IProperty } from '../event-card/IProperty.interface';
import { AlertiyfyService } from 'src/app/services/alertiyfy.service';
import { ResponseFile } from './ResponseFile';
import { TokenStorageService } from 'src/app/services/TokenStorageService ';
import { User } from 'src/app/model/user';
import { Event } from 'src/app/model/Event';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {
  //@ViewChild('Form') addPropertyForm: NgForm;
 
  addeventForm: FormGroup;
  filePhoto: File;
  res: any = new ResponseFile();
  image:any;
  photoTouched:Boolean;
 event:Event;
 user :Promise<any>; 
 
  
  constructor(private fb: FormBuilder, 
    private router: Router,
    private alertify:AlertiyfyService,
    private imageService: ImageService,
    private tokenStorage: TokenStorageService,
    private housingService: HousingService,
    private userSerice:UserServiceService
    ) { }

  ngOnInit() {
    this.CreateaddeventForm();
    this.event=new Event();
  }


  CreateaddeventForm(){

    this.addeventForm = this.fb.group({
      BasicInfo:this.fb.group({
        name:[null,Validators.required],
        type:[null,Validators.required],
        description:[null,Validators.required],
        date_debut:[null,Validators.required],
        date_fin:[null,Validators.required],
        publisher:[null,Validators.required],
        location:[null,Validators.required],
        note:[null,Validators.required],
        logo:[null,Validators.required]
     
      })

    })
  }
 
 

//Getter methods
get BasicInfo(){
  return this.addeventForm.controls['BasicInfo'] as FormGroup;
}
get name(){
  return this.BasicInfo.controls['name'] as FormControl;
}

get type(){
  return this.BasicInfo.controls['type'] as FormControl;
}
get description(){
  return this.BasicInfo.controls['description'] as FormControl;
}
get date_debut(){
  return this.BasicInfo.controls['date_debut'] as FormControl;
}
get date_fin(){
  return this.BasicInfo.controls['date_fin'] as FormControl;
}
get publisher(){
  return this.BasicInfo.controls['price'] as FormControl;
}
get location(){
  return this.BasicInfo.controls['town'] as FormControl;
}
get note(){
  return this.BasicInfo.controls['city'] as FormControl;
}






       onSubmit() {
        this.imageService.uploadFile(this.filePhoto).subscribe(
        data => {
          console.log(data);
        this.event.logo=data["filename"];
          this.housingService.addEvent(this.event).subscribe(
            data => {
              console.log(data); 
            });
                  
           this.BasicInfo.reset();
           this.addeventForm.reset();
         this.alertify.success('Congrats, your event was added  !');
        }
        );
    }
      
       
    
      
    
    //if (this.BasicInfo.valid){
   /* await this.housingService.addProp(this.propt);
    console.log(this.propt.Name);  
    this.addPropertyForm.reset();
      this.alertify.success('Congrats, your property was added  !');*/
     //} else {
      //this.alertify.error('please insert data..');
     //}
   


     getFileDetailsPhoto(event) {
      this.filePhoto = event.target.files[0];
      this.photoTouched = true;
      
    
    }


}

