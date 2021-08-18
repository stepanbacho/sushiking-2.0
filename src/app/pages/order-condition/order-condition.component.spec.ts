import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderConditionComponent } from './order-condition.component';

describe('OrderConditionComponent', () => {
  let component: OrderConditionComponent;
  let fixture: ComponentFixture<OrderConditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderConditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderConditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
