import { Component, OnInit, Input } from '@angular/core';
import { CategoryService } from 'src/app/category.service';

@Component({
  selector: 'product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {
  @Input('category') category;
  @Input('home')home:boolean;
  categories$;
  constructor(private categoryservice: CategoryService) { 
    this.categories$ = this.categoryservice.getCategories();
  }
  ngOnInit(): void {
  }

}
