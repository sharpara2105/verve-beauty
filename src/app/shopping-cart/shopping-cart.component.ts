import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';
import {Observable} from 'rxjs';
import { ShoppingCart } from '../models/shopping-cart';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit{
  cart$: Observable<ShoppingCart>;

  constructor(private cartservice: ShoppingCartService) { 
  }
async ngOnInit(){
  this.cart$= await this.cartservice.getCart();
//   this.cart$.subscribe(cart=>{
//     for(let key in cart['items']){
//       console.log(cart['items'][key]['product']['title']);

//     }
//   });
}
}
