import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { combineLatest, Subscription } from 'rxjs';
// import {DataTableResource} from 'angular-4-data-table'
import {elem} from '../../../app/models/elem';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit,OnDestroy {
  elem=[];
  filteredProducts=[];
  Subscription : Subscription;
  dtOptions: DataTables.Settings = {};
  // tableResource : DataTableResource<elem>
  // items : elem[];
  // itemCount : number;
  constructor(private productservice :ProductService) { 
  }

  ngOnInit(): void {
    const that = this;
    this.Subscription = combineLatest([
    this.productservice.getData(),
    this.productservice.getMetadata()
    ]).subscribe(combine =>{
      for(let i =0; i < combine[0].length; i++) {
        that.elem.push({'title':combine[0][i]['title'],'price':combine[0][i]['price'],'key':combine[1][i]['key']});
        that.filteredProducts.push({'title':combine[0][i]['title'],'price':combine[0][i]['price'],'key':combine[1][i]['key']});
        // this.initializeTable(that.elem);
      }
    }) 
    //that.filteredProducts = that.elem.slice() ----> not working , that's why pushed it into the filteredProducts array
    this.dtOptions = {
      searching:false, 
    }
  }
  ngOnDestroy(){
    this.Subscription.unsubscribe();
  }
  filter(query:String) {
    this.filteredProducts = (query)?
    this.elem.filter(p => p.title.toLowerCase().includes(query.toLowerCase())) :
    this.elem;
  }
  // private initializeTable(product:elem[]){
  //   this.tableResource = new DataTableResource(product);  //product -> this.elem
  //   this.tableResource.query({offset:0}).
  //   then(items => this.items = items);
  //   this.tableResource.count().then(count => this.itemCount = count);
  // }
  // reloadItems(params) {
  //   if(!this.tableResource) return;
  //   this.tableResource.query(params).then(items =>this.items = items);
  // }

}
