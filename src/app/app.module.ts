import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgxStarRatingModule } from 'ngx-star-rating';
//ngx
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ButtonsModule} from 'ngx-bootstrap/Buttons';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DateAdapter, MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';

import { MatBadgeModule } from '@angular/material/badge';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatInputModule} from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule} from '@angular/material/icon';
import { MatSliderModule} from '@angular/material/slider';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { MatMenuModule } from '@angular/material/menu';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventCardcomponent } from './property/event-card/event-card.component';
import { EventListComponent } from './event-list/event-list.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HousingService } from './services/housing.service';
import { AddEventComponent } from './property/add-event/add-event.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { NgxMatDatetimePickerModule, NgxMatTimepickerModule } from '@angular-material-components/datetime-picker';
import { UserServiceService } from './services/user-service.service';
import { AlertiyfyService } from './services/alertiyfy.service';

import { AuthService } from './services/auth.service';
//import { io } from 'socket.io-client';
import { AuthInterceptor } from './services/auth.interceptor';
import { MY_FORMATS } from './date-format';
import { EditEventComponent } from './property/edit-event/edit-event.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AuthGuard } from './auth/auth.guard';
import { ErrorInterceptor } from './error-interceptor';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { AuthenticatorComponent } from './authenticator/authenticator.component';
import { ForgotComponent } from './forgot/forgot.component';
import { ProfileComponent } from './profile/profile.component';



const appRoutes: Routes = [
{path:'add-event',component: AddEventComponent},
{path:'edit-event/:Id',component: EditEventComponent},
{path:'event-detail/:Id',component: EventDetailComponent },
{ path: 'Authenticator' , component:AuthenticatorComponent},

{path:'**',component: EventListComponent},

  //{ path: 'profile/:email', component: ProfileComponent },
 

]

@NgModule({
  declarations: [			
    AppComponent,
    EventCardcomponent,
    EventListComponent,
      NavBarComponent,
      AddEventComponent,
      EventDetailComponent,
      EditEventComponent,
      LoginComponent,
      RegisterComponent,
      ErrorComponent,
      HomeComponent,
      AuthenticatorComponent,
      ForgotComponent,
      
    
    
      
     
      
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxStarRatingModule,
    ReactiveFormsModule,
    MatFormFieldModule ,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMenuModule,
    MatToolbarModule,
    MatInputModule,
    MatBadgeModule,
    MDBBootstrapModule.forRoot(),
    MatIconModule,
    MatSliderModule,
    NgxMatTimepickerModule,
    NgxMatDatetimePickerModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ButtonsModule.forRoot(),

  ],
 
  providers: [
    HousingService,
    UserServiceService,
    AlertiyfyService,
    AuthService,
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
