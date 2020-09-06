import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';
import { ShoppingCart } from '../models/shopping-cart';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit{
  
  cart$:Observable<ShoppingCart>;
  
  subscription : Subscription;
  constructor(
    private cartservice:ShoppingCartService,
    ) {}
  async ngOnInit(){
    this.cart$ = await this.cartservice.getCart();
  }  
}
