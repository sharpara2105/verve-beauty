import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { order } from '../models/order';
import { ShoppingCartService } from '../shopping-cart.service';
import { OrderService } from '../order.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { ShoppingCart } from '../models/shopping-cart';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.css']
})
export class ShippingFormComponent implements OnInit,OnDestroy{
  shipping:any = {};
  userId:string;
  @Input('cart')cart:ShoppingCart;
  userSubscription : Subscription;
  constructor(
    private orderService:OrderService,
    private router:Router,
    private authService:AuthService) { }
  async placeOrder() {
    let newOrder = new order(this.shipping,this.userId,this.cart)
    let result = await this.orderService.storeOrder(newOrder.order);
    this.router.navigate(['/order-success',result.key])
  }
  async ngOnInit(){
      this.userSubscription = this.authService.user$.subscribe(user=>this.userId =user.uid);
    }  
  ngOnDestroy(){
    this.userSubscription.unsubscribe();
  }

}
