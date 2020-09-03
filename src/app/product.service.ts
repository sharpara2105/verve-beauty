import { Injectable } from '@angular/core';
import { AngularFireDatabase} from '@angular/fire/database';
import { combineLatest} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  product=[];
  constructor(private db : AngularFireDatabase) {
   }
   create(product){
     return  this.db.list('/product').push(product);
   }
   getData(){
     return this.db.list('/product').valueChanges();
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
  getdataAndmetadata(){
    return combineLatest([
      this.db.list('/product').valueChanges(),
      this.db.list('/product').snapshotChanges()
    ])
  }
}
