import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalastpaymentComponent } from './calastpayment.component';

describe('CalastpaymentComponent', () => {
  let component: CalastpaymentComponent;
  let fixture: ComponentFixture<CalastpaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalastpaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalastpaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
