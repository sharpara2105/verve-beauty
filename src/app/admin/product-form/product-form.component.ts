import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/category.service';
import {map} from 'rxjs/operators';
import {take} from 'rxjs/operators';
import { ProductService } from 'src/app/product.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent{
  categories$;
  product:any = {};
  constructor(private categoryservice: CategoryService,private saveproduct: ProductService,private route: ActivatedRoute) {

    this.categories$ = categoryservice.getCategories();
    let id = this.route.snapshot.paramMap.get('id');
    if(id){
      this.saveproduct.get(id).subscribe(p => this.product =p);
    }
   }
   save(product){
     this.saveproduct.create(product);
   }
   
}
