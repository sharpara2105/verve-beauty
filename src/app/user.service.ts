import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject, AngularFireAction } from '@angular/fire/database';
import { Appuser } from './models/app.user';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db : AngularFireDatabase) { }
  save(user : firebase.User) {
    this.db.object('/user/'+ user.uid).update({
      name : user.displayName,
      email : user.email
    });
  }

  get(uid:string):AngularFireObject<Appuser>{
    return this.db.object('/user/' +uid);
  }
}
