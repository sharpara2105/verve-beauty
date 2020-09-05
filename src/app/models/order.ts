import { ShoppingCart } from './shopping-cart';

export class order{
    constructor(public shipping,public userId:String,public cart:ShoppingCart){
    }
    get order(){
        let order = {
            datePlaced: new Date().getTime(),
            shipping:this.shipping,
            userId:this.userId,
            items: this.cart.items.map(i => {
              return {
                product :{
                  title: i.product.title,
                  imageUrl : i.product.imageUrl,
                  price : i.product.price
                },
                quantity: i.quantity,
                totalPrice:i.totalPrice
              }
            })
          }
        return order;
    }
}