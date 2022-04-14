import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HousingService } from '../services/housing.service';
import { IProperty } from '../property/event-card/IProperty.interface';
import { FormGroup, FormBuilder, Validators,FormControl } from '@angular/forms';
import { Event } from 'src/app/model/Event';
import { ThrowStmt } from '@angular/compiler';
import { AlertiyfyService } from '../services/alertiyfy.service';
import { io } from 'socket.io-client';
var socket = io("http://localhost:3100", { transports : ['websocket'] });
@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
public id: any;
event:any;
result: any;

public form: FormGroup;
rating3:number;

  constructor(private route: ActivatedRoute, private router:Router
   ,private housingService: HousingService,private fb: FormBuilder,  private alertify:AlertiyfyService, ) { 

    this.rating3 = null;
 
   }

  async ngOnInit() {
    this.id = this.route.snapshot.params['Id'];
    
    this.housingService.getEventById(this.id).subscribe(data => {
    this.event=data;
    console.log(this.event); 
     });
    /* this.result=await this.getAvgRate();
     console.log(this.result); */
     this.result=await this.getAvgRate();
     console.log(this.result); 
  
     
    }
    actionOnRequest() {
      socket.emit('sendNotifications', {
        message:  `hazem fakhet wants to participate to ` +  this.event.name + ` event` ,
        sender: sessionStorage.getItem('user_id'),
        reciever: sessionStorage.getItem('user_id')
      }, () => {
  
      });
      this.alertify.success('you are joined to us');
      this.router.navigate(['/']);
      
    }

    saveRate(){
      this.id = this.route.snapshot.params['Id'];
      this.housingService.pushRate(this.id,this.rating3).subscribe(
        data => {console.log(data)});
        window.location.reload();
      
       
    }

   async getAvgRate(){
      this.id = this.route.snapshot.params['Id'];
      let data = await this.housingService.getAvgRate(this.id).toPromise();
      return data;
    }



  

  
   /* this.route.params.subscribe(
      (params) =>{

         this.propertyId =+params['Id'];
         this.housingService.getProperty(this.propertyId).subscribe(
           data =>{
             this.property.Name=data.Name;
           }
         )
        }

    )*/


    
  



 
}
