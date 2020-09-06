import { Component, OnInit, OnDestroy } from '@angular/core';
import { OrderService } from '../order.service';
import { AuthService } from '../auth.service';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent{
  orders$;

  constructor(
    private orderService:OrderService,
    private authService: AuthService) {
    this.orders$ = this.authService.user$.pipe(switchMap(user=>{
      return orderService.getOrdersByUser(user.uid);
    }))
    // this.orders$.subscribe(orders=>console.log(orders));
  }
}
