import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'event-module';
  public static urlConfig='http://localhost:3000/api/event/';
  public static urlconfig1='http://localhost:3000/api/event/add/rate/';
  public static urlconfig2='http://localhost:3000/api/event/avg/rate/';
}
