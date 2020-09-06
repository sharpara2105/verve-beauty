import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCart } from '../models/shopping-cart';

@Component({
  selector: 'app-shopping-cart-summmary',
  templateUrl: './shopping-cart-summmary.component.html',
  styleUrls: ['./shopping-cart-summmary.component.css']
})
export class ShoppingCartSummmaryComponent implements OnInit {
  @Input('cart') cart:ShoppingCart;

  constructor() {
  }

  ngOnInit(): void {
  }

}
