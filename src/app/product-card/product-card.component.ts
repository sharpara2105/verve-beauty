import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent{
  @Input('product') product;
  @Input('showAction') showAction;
  @Input('shoppingCart') shoppingCart;
  constructor(private cartService:ShoppingCartService) {}
  addtoCart(){
    this.cartService.addTocart(this.product);
  }

}
