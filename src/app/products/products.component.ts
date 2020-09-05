import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { ShoppingCartService } from '../shopping-cart.service';
import { ShoppingCart } from '../models/shopping-cart';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {
  product$;
  cart$:Observable<ShoppingCart>;
  product=[];
  subscription : Subscription;
  subscribe : Subscription;
  filteredProduct=[];
  category: String;
  constructor(
    private productservice : ProductService,
    private route : ActivatedRoute,
    private shoppingcartService : ShoppingCartService
    ) { 
    this.product$ = this.productservice.getData();
   
    this.subscription = this.productservice.getdataAndmetadata().subscribe(combine =>{
      for(let i =0; i < combine[0].length; i++) {
        this.product.push({
        'title':combine[0][i]['title'],
        'price':combine[0][i]['price'],
        'category':combine[0][i]['category'],
        'imageUrl':combine[0][i]['imageUrl'],
        'key':combine[1][i]['key'],
      });
      };
      route.queryParamMap.subscribe(params => {
        this.category = params.get('category');
        this.filteredProduct = (this.category)? this.product.filter(p=>p.category === this.category): this.product;
    }); 
  }); 
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
}
async ngOnInit(){
  this.cart$ = await this.shoppingcartService.getCart();
}
}
