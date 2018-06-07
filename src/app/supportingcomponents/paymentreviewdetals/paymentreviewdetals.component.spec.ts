import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentreviewdetalsComponent } from './paymentreviewdetals.component';

describe('PaymentreviewdetalsComponent', () => {
  let component: PaymentreviewdetalsComponent;
  let fixture: ComponentFixture<PaymentreviewdetalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentreviewdetalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentreviewdetalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
