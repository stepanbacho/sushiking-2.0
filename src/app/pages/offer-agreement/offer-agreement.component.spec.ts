import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferAgreementComponent } from './offer-agreement.component';

describe('OfferAgreementComponent', () => {
  let component: OfferAgreementComponent;
  let fixture: ComponentFixture<OfferAgreementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferAgreementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferAgreementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
