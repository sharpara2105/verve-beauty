import { Component,Input } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.css']
})
export class ProductQuantityComponent{
  @Input('product') product;
  @Input('shoppingCart') shoppingCart;
  constructor(private cartService:ShoppingCartService) { }

  addtoCart(){
    this.cartService.addTocart(this.product);
  }
  removeFromCart(){
    this.cartService.removeFromCart(this.product);
  }

}
