import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { ShoppingCartService } from './shopping-cart.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private db: AngularFireDatabase,private shoppingCartService:ShoppingCartService){ }
  storeOrder(order){
    let result = this.db.list('/orders').push(order);
    this.shoppingCartService.clearCart();
    return result;
  }
  getOrders() { 
    return this.db.list('/orders').valueChanges();
  }
  getOrdersByUser(userId: string){
    return this.db.list('/orders',query=> {
        return query.orderByChild('userId').equalTo(userId)     
      }).valueChanges();
  }
}
