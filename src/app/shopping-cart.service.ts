import { Injectable, OnDestroy } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { ProductService } from './product.service';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService implements OnDestroy{
  productMetadata;
  subscription : Subscription;
  constructor(private db: AngularFireDatabase,private productService: ProductService) { 
  }
  
  private create(){
    return this.db.list('/cart').push({
      dateCreated: new Date().getTime()
    //   title : product.title,
    //   price : product.price,
    //   imageUrl : product.imageUrl
    // });
  });
}
private async getOrcreateCartId(){
  let cartid= localStorage.getItem('cartId');
  if(cartid) return cartid;
  let result = await this.create();
    localStorage.setItem('cartId',result.key);
    return result.key;
}
  async addTocart(product) {
    let cartId = await this.getOrcreateCartId();
    // // this.subscription = this.productService.getMetadata().subscribe(id => {
    // //   this.productMetadata=id;
    //   let items$ = this.db.object('/cart/'+cartId+'/items/'+this.productMetadata.key).valueChanges();
    //   items$.pipe(take(1)).subscribe(item => {
    //     if(item.$exists()) items$.update(
    //       {
    //         quantity : item.quantity +1
    //       }
    //     )
    //   }

    //     )
    //     )
    
    // });

  }
  ngOnDestroy(){
    this.subscription.unsubscribe();

  }

}
