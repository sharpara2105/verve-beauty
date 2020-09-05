import {ShoppingCartItem} from './shopping-cart-item';

export class ShoppingCart{
    items : ShoppingCartItem[]=[];
    constructor(public itemsMap :{[key:string]:ShoppingCartItem}){ 
      for(let key in itemsMap){
        this.items.push(itemsMap[key]);
      } 
    }

    get totalItemsCount(){
        let count =0;
        for(let productId in this.itemsMap){
       count += this.itemsMap[productId]['quantity'];
      }
    
      return count;
    }

}