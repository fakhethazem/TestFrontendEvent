import { Component, Input } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AlertiyfyService } from "src/app/services/alertiyfy.service";
import { HousingService } from "src/app/services/housing.service";
import { IProperty } from "./IProperty.interface";


@Component({
  selector: 'app-event-card',
 // template: '<h1>I am a a card</h1>',
 templateUrl:'event-card.component.html',
  //styles:['h1{front-weight: normal;}']
  styleUrls:['event-card.component.css']
}


)
export class EventCardcomponent{

@Input() event: any;
constructor(private route: ActivatedRoute, 
  private housingService: HousingService,private router:Router,private alertify:AlertiyfyService,) {

}
deleteButtonPress(id:string) {
  
  this.housingService.deleteEvent(id).subscribe(data=>{
    console.log(data);
    this.alertify.success('your event was deleted ');
    window.location.reload();
    this.router.navigate(['/']);
  
  }
  )

  
}


}
