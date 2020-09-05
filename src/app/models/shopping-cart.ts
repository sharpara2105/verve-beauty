import {ShoppingCartItem} from './shopping-cart-item';

export class ShoppingCart{
    items : ShoppingCartItem[]=[];
    constructor(public itemsMap :{[key:string]:ShoppingCartItem}){ 
      for(let key in itemsMap){
        let item = itemsMap[key];
        this.items.push(new ShoppingCartItem(item['product'],item['quantity']));
      } 
    }
    get totalItemsCount(){
        let count =0;
        for(let productId in this.itemsMap){
       count += this.itemsMap[productId]['quantity'];
      }
    
      return count;
    }
    get totalSum(){
      let price =0;
      for (let item in this.items){
        price += this.items[item]['totalPrice'];
      }
      return price;
    }

}