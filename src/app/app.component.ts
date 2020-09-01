import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'verve-beauty';
  constructor(private auth : AuthService, private route: Router,private userService : UserService) {
    auth.user$.subscribe(user =>{
      if(! user) return; 
        userService.save(user);
        let returnurl = localStorage.getItem('returnUrl');
        if(!returnurl) return;
        route.navigateByUrl(returnurl);
        localStorage.clear();
      
    })
  }
}
