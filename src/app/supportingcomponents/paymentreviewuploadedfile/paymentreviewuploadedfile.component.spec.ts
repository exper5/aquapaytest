import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentreviewuploadedfileComponent } from './paymentreviewuploadedfile.component';

describe('PaymentreviewuploadedfileComponent', () => {
  let component: PaymentreviewuploadedfileComponent;
  let fixture: ComponentFixture<PaymentreviewuploadedfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentreviewuploadedfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentreviewuploadedfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
