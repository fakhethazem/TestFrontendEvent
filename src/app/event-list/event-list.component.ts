
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProperty } from '../property/event-card/IProperty.interface';
import { HousingService } from '../services/housing.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  public data: Record<string, any>[];
  public events: Record<string, any>[];

  SellRent = 1;
  properties: IProperty[];

  City='';
  Town='';
  maxPrice='';
  constructor(private route: ActivatedRoute,private housingService: HousingService) {}

  public async ngOnInit(){
    if (this.route.snapshot.url.toString()){
      this.SellRent = 2; // means we are on rent-property else we are on base url

    }
    this.events =await this.showevents();
    console.log(this.events);
 
    /*this.housingService.getAllProperties(this.SellRent).subscribe(
      data => {
        this.properties = data;
        console.log(data);
      }, error => {
        console.log('httperror:');
        console.log(error);
      }

    );*/

  }
  onSearch(){

  }
  public  async showevents(){
    let data=await this.housingService.getAll().toPromise();
    return data;
  }
}
