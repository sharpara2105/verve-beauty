import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';
import { ShoppingCart } from '../models/shopping-cart';
import { Subscription } from 'rxjs';
import { OrderService } from '../order.service';
import { AuthService } from '../auth.service';
import { order } from '../models/order';
import { Router } from '@angular/router';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit,OnDestroy{
  shipping:any = {};
  cart:ShoppingCart;
  userId:string;
  subscription : Subscription;
  userSubscription : Subscription;
  constructor(
    private cartservice:ShoppingCartService,
    private orderService:OrderService,
    private authService:AuthService,
    private router:Router) {}
  async ngOnInit(){
    let cart$ = await this.cartservice.getCart();
    this.subscription = cart$.subscribe(cart=>this.cart=cart);
    this.userSubscription =this.authService.user$.subscribe(user=>this.userId =user.uid);
  }
  
  async placeOrder() {
    let newOrder = new order(this.shipping,this.userId,this.cart)
    let result = await this.orderService.storeOrder(newOrder.order);
    this.router.navigate(['/order-success',result.key])
  }   
ngOnDestroy(){
  this.subscription.unsubscribe();
  this.userSubscription.unsubscribe();
}
}
