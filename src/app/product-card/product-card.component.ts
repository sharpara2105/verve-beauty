import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent  {
  @Input('product') product;
  @Input('showAction') showAction;
  @Input('shoppingCart') shoppingCart;
  constructor(private cartService:ShoppingCartService) {}
  addtoCart(){
    this.cartService.addTocart(this.product);
  }
  removeFromCart(){
    this.cartService.removeFromCart(this.product);
  }
  getQuantity(){
    if(!this.shoppingCart) return 0;
    let item = this.shoppingCart.itemsMap[this.product.key];
    return item?item.quantity:0;
  }

}
