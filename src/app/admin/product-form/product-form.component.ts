import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/category.service';
import {map} from 'rxjs/operators';
import { ProductService } from 'src/app/product.service';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent{
  categories$;
  constructor(private categoryservice: CategoryService,private saveproduct: ProductService) {
    this.categories$ = categoryservice.getCategories();
   }
   save(product){
     this.saveproduct.create(product);
   }
}
