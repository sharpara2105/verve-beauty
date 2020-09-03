import { Injectable, OnDestroy } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { ProductService } from './product.service';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService{
  productMetadata;
  subscription : Subscription;
  constructor(private db: AngularFireDatabase,private productService: ProductService) { 
  }
  
  private create(){
    return this.db.list('/shopping-carts/').push({
      dateCreated: new Date().getTime()
  });
  }
  private async getOrcreateCartId(){
    let cartid= localStorage.getItem('cartId');
    if(cartid) return cartid;
    let result = await this.create();
      localStorage.setItem('cartId',result.key);
      return result.key;
  }
  async addTocart(product) {
    let cartId = await this.getOrcreateCartId();
    let item$ = this.db.object('/shopping-carts/'+cartId+'/items/'+product.key).valueChanges();
    let item$$ = this.db.object('/shopping-carts/' + cartId + '/items/' + product.key);
    item$.pipe(take(1)).subscribe(item =>{
      if(item===null)
      {
        item$$.set({
          product : product,
          quantity : 1
        });
        console.log('adding new product to cart');
      }
      
      else{
        item$$.update(
          {
            quantity : item['quantity']+1
          });
          console.log('updating exisiting product ');
      }  
    });
  }
  async getCart(){
    let cartId = await this.getOrcreateCartId();
    return this.db.object('/shopping-carts/'+cartId).valueChanges();
  }
}
