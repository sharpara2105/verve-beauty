import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from './auth.service';
import {map} from 'rxjs/operators';
import {switchMap} from 'rxjs/operators';

import { UserService } from './user.service';
import { Appuser } from './models/app.user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate{

  constructor(private auth: AuthService,private userService: UserService) { }
  // canActivate():Observable<boolean>{
  //   return this.auth.user$.pipe(switchMap((user => {return this.userService.get(user.uid).valueChanges()})))
  //   .pipe(map(appuser =>appuser.isAdmin));
    
  // }
  canActivate():Observable<boolean>{
    return this.auth.appUser$.pipe(map(appUser => appUser.isAdmin ));
    
  }
}
