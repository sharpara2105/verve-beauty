import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { combineLatest, Subscription, observable, Observable } from 'rxjs';
import {of} from 'rxjs';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit,OnDestroy {
  elem=[];
  Subscription : Subscription;
  constructor(private productservice :ProductService) { 
  //  this.product$ = this.productservice.getData();
  //  this.metadata$ = this.productservice.getMetadata();

  }

  ngOnInit(): void {
    const that = this;
    this.Subscription = combineLatest([
    this.productservice.getData(),
    this.productservice.getMetadata()
    ]).subscribe(combine =>{
      for(let i =0; i < combine[0].length; i++) {
        that.elem.push({'title':combine[0][i]['title'],'price':combine[0][i]['price'],'key':combine[1][i]['key']});
      }
    })   
  }
  ngOnDestroy(){
    this.Subscription.unsubscribe();
  }

}
