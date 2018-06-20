import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChlastpaymentComponent } from './chlastpayment.component';

describe('ChlastpaymentComponent', () => {
  let component: ChlastpaymentComponent;
  let fixture: ComponentFixture<ChlastpaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChlastpaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChlastpaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
