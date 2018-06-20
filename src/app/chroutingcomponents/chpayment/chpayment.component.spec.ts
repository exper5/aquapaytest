import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChpaymentComponent } from './chpayment.component';

describe('ChpaymentComponent', () => {
  let component: ChpaymentComponent;
  let fixture: ComponentFixture<ChpaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChpaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChpaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
