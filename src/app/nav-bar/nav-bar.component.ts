import { Component, OnInit } from '@angular/core';
import { AlertiyfyService } from '../services/alertiyfy.service';
import { Subscription } from "rxjs";
import { TokenStorageService } from 'src/app/services/TokenStorageService ';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from "../auth/auth.service" ;
import { io } from 'socket.io-client';

var socket = io("http://localhost:3100", { transports : ['websocket'] });
console.log(socket);
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  userIsAuthenticated = false;
  private authListenerSubs: Subscription = new Subscription;
  notification: Number;
  notifications = [];

  constructor(private authService: AuthService
    ) { 
      socket.on('connection', () => {

      });
      const params = {
        sender: sessionStorage.getItem('user_id')
      }
      socket.emit('joinNotifications', params, () => {
      });
  
      socket.on('recieveNotifications', request => {
        this.notifications.push(request);
        this.notification = this.notifications.length;
      })
    }

  ngOnInit() {
    this.userIsAuthenticated = this.authService.getIsAuth();
    this.authListenerSubs = this.authService
      .getAuthStatusListener()
      .subscribe(isAuthenticated => {
        this.userIsAuthenticated = isAuthenticated;
      });
    
  }

  onLogout() {
    this.authService.logout();
  }
  ngOnDestroy() {
    this.authListenerSubs.unsubscribe();
  }

 

}
