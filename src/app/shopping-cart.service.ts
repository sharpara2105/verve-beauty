import { Injectable} from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { ProductService } from './product.service';
import { Subscription,Observable} from 'rxjs';
import { take } from 'rxjs/operators'
import {map} from 'rxjs/operators';
import { ShoppingCart } from './models/shopping-cart';


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
    // let cartId = await this.getOrcreateCartId();
    this.updateItemQuantity(product,1);  
  }
  async removeFromCart(product){
    this.updateItemQuantity(product,-1);
  }
  async clearCart(){
    let cartId = await this.getOrcreateCartId();
    this.db.object('/shopping-carts/' + cartId + '/items/').remove();
    


  }
  async getCart(){
    let cartId = await this.getOrcreateCartId();
    return this.db.object('/shopping-carts/'+cartId).valueChanges()
    .pipe(map(x=>new ShoppingCart(x['items'])));
  }
  private async updateItemQuantity(product,change:number){
    let cartId = await this.getOrcreateCartId();
    let item$ = this.db.object('/shopping-carts/'+cartId+'/items/'+product.key).valueChanges();
    let item$$ = this.db.object('/shopping-carts/' + cartId + '/items/' + product.key);
    item$.pipe(take(1)).subscribe(item =>{
      if(item){
        item$$.update(
          {
            product :product,
            quantity : (item['quantity']||0)+change
          });
      }
      else{
        item$$.set({product:product,quantity:1});
      }
        
    });

  }
}
