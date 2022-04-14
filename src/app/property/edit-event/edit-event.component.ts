import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Event } from 'src/app/model/Event';
import { AlertiyfyService } from 'src/app/services/alertiyfy.service';
import { HousingService } from 'src/app/services/housing.service';
@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {
  
  public id: string;
  editeventForm: FormGroup;
  event: Event = {
    name: '',
    type: '',
    description: '',
    note: '',
    date_debut: '',
    date_fin: '',
    location: '',
    logo: ''
  };

  constructor(private route: ActivatedRoute, private fb: FormBuilder, 
       private housingService: HousingService,private router:Router,private alertify:AlertiyfyService,) {
   
   }

  ngOnInit(): void {
    this.editaddeventForm();
    this.id = this.route.snapshot.params['Id'];
    this.housingService.getEventById(this.id).subscribe(data => {
    this.event=data;
    console.log(this.event); 
     });
  }


  editaddeventForm(){

    this.editeventForm = this.fb.group({
      BasicInfo:this.fb.group({
        name:['',Validators.required],
        type:['',Validators.required],
        description:['',Validators.required],
        date_debut:['',Validators.required],
        date_fin:['',Validators.required],
        publisher:['',Validators.required],
        location:['',Validators.required],
        note:['',Validators.required],
        logo:['',Validators.required]
     
      })

    })
  }

  get BasicInfo(){
    return this.editeventForm.controls['BasicInfo'] as FormGroup;
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
    this.id = this.route.snapshot.params['Id'];
 this.housingService.updateEvent(this.event,this.id).subscribe(
   data => {console.log(data)});
   this.alertify.success('your event was updated ');
   this.router.navigate(['/']);
}
  
}
