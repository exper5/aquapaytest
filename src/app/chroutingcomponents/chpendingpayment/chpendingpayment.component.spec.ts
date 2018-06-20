import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChpendingpaymentComponent } from './chpendingpayment.component';

describe('ChpendingpaymentComponent', () => {
  let component: ChpendingpaymentComponent;
  let fixture: ComponentFixture<ChpendingpaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChpendingpaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChpendingpaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
