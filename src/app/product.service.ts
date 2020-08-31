import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db : AngularFireDatabase) {
   }
   create(product){
     return  this.db.list('/product').push(product);
   }
   getData(){
     return this.db.list('/product').valueChanges();
   }
   getMetadata(){
    return this.db.list('/product').snapshotChanges();
  }
  get(productId) {
    return this.db.object('/product/'+productId).valueChanges();
  }
  update(productId,product){
  this.db.object('/product/'+productId).update(product);
  }
  delete(productId){
    this.db.object('/product/'+productId).remove();
  }
}
