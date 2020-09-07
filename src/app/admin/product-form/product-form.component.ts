import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/category.service';
import {map} from 'rxjs/operators';
import {take} from 'rxjs/operators';
import { ProductService } from 'src/app/product.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent{
  categories$;
  id;
  product:any = {};
  constructor(
    private categoryservice: CategoryService,
    private saveproduct: ProductService,
    private route: ActivatedRoute,
    private router: Router) {
    this.categories$ = categoryservice.getCategories();
    this.id = this.route.snapshot.paramMap.get('id');
    if(this.id && this.id != 'new'){
      this.saveproduct.get(this.id).pipe(take(1)).subscribe(p => this.product =p);
    }
   }
   save(p){
     if(this.id !='new'){ //bec this time id would be the 'key' only and not new !
       this.saveproduct.update(this.id,p);
       this.router.navigate(['admin/products']);
       return;
     }
      this.saveproduct.create(p);
      this.router.navigate(['admin/products']);
     
   }
   delete()
   {
     if(!confirm('Are you sure you want to delete this product')) return;
    this.saveproduct.delete(this.id);
    this.router.navigate(['admin/products']);
   }
   
}
