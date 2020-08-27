import { Injectable } from '@angular/core';
import * as firebase from "firebase";
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Appuser } from './models/app.user';
import {switchMap} from 'rxjs/operators';
import { UserService } from './user.service';
import {of} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<firebase.User>;
  constructor(private afauth : AngularFireAuth, private route : ActivatedRoute,private userService: UserService) { 
    this.user$ = afauth.authState;
  }
  login() {
    let returnurl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl',returnurl);
    this.afauth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }
  logout() {
    this.afauth.signOut();
    };

    get appUser$(): Observable<Appuser>{
      return this.user$.pipe(switchMap(user => {
        if(user) return this.userService.get(user.uid).valueChanges();
        return of(null);
      }));

    }
}
