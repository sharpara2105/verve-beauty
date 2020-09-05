import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartSummmaryComponent } from './shopping-cart-summmary.component';

describe('ShoppingCartSummmaryComponent', () => {
  let component: ShoppingCartSummmaryComponent;
  let fixture: ComponentFixture<ShoppingCartSummmaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingCartSummmaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCartSummmaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
