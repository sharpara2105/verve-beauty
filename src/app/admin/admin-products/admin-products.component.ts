import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { combineLatest, Subscription } from 'rxjs';

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
  constructor(private productservice :ProductService) { 
  }

  ngOnInit(): void {
    const that = this;
    this.Subscription = this.productservice.getdataAndmetadata().subscribe(combine =>{
      for(let i =0; i < combine[0].length; i++) {
        that.elem.push({'title':combine[0][i]['title'],'price':combine[0][i]['price'],'key':combine[1][i]['key']});
        that.filteredProducts.push({'title':combine[0][i]['title'],'price':combine[0][i]['price'],'key':combine[1][i]['key']});
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
}
