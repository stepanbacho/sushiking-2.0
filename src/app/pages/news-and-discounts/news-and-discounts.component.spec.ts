import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsAndDiscountsComponent } from './news-and-discounts.component';

describe('NewsAndDiscountsComponent', () => {
  let component: NewsAndDiscountsComponent;
  let fixture: ComponentFixture<NewsAndDiscountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsAndDiscountsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsAndDiscountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
