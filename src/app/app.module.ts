import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { NgbModule,NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { environment } from 'src/environments/environment';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { LoginComponent } from './login/login.component';
import * as firebase from 'firebase';
import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';
import { CheckOutComponent } from './check-out/check-out.component';
import { UserService } from './user.service';
import { AdminAuthGuardService } from './admin-auth-guard.service';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
firebase.initializeApp(environment.firebase);
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ShoppingCartComponent,
    LoginComponent,
    ProductFormComponent,
    AdminProductsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    RouterModule.forRoot([
    {
      path : 'cart',
      component: ShoppingCartComponent
  },
  {
    path : 'my/orders',
    component: MyOrdersComponent,
    canActivate:[AuthGuardService]
},
{
  path : 'check-out',
  component: CheckOutComponent,
  canActivate:[AuthGuardService]
},
{
  path : 'admin/orders',
  component: AdminOrdersComponent,
  canActivate:[AuthGuardService,AdminAuthGuardService]
},
{
  path : 'admin/products',
  component: AdminProductsComponent,
  canActivate:[AuthGuardService,AdminAuthGuardService]
  },
{
  path : 'admin/products/new',
  component: ProductFormComponent,
  canActivate:[AuthGuardService,AdminAuthGuardService]
},
{
  path : 'login',
component: LoginComponent
}
  ])
  ],
  providers: [
    AuthService,
    AuthGuardService,
    AdminAuthGuardService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
