import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AslastpaymentComponent } from './aslastpayment.component';

describe('AslastpaymentComponent', () => {
  let component: AslastpaymentComponent;
  let fixture: ComponentFixture<AslastpaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AslastpaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AslastpaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
