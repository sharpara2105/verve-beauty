import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Appuser } from '../models/app.user';
import { ShoppingCartService } from '../shopping-cart.service';
import { Observable } from 'rxjs';
import { ShoppingCart } from '../models/shopping-cart';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  appUser : Appuser
  cart$: Observable<ShoppingCart>;
  constructor(private auth: AuthService,private cartService:ShoppingCartService) {
   }
   async ngOnInit(){
    this.auth.appUser$.subscribe(appuser => this.appUser = appuser);
    this.cart$ = await this.cartService.getCart();
      // this.cartItemcount =0;
      // for(let productId in cart['items']){
      //  this.cartItemcount += cart['items'][productId]['quantity'];
      // }
   }
   logout(){
     this.auth.logout();
   }
 
  }

