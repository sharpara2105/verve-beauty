import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Appuser } from '../models/app.user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
appUser : Appuser
  constructor(private auth: AuthService) {
    auth.appUser$.subscribe(appuser => this.appUser = appuser);
   }
   logout(){
     this.auth.logout();
   }
 
  }

