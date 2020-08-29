import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db : AngularFireDatabase) {
   }
   create(product){
     return  this.db.object('/product').update({
       'title':product.title,
       'price' : product.price,
       'imageUrl': product.imageUrl,
       'category': product.category
    });
   }
}
