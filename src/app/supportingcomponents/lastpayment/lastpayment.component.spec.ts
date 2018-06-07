import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastpaymentComponent } from './lastpayment.component';

describe('LastpaymentComponent', () => {
  let component: LastpaymentComponent;
  let fixture: ComponentFixture<LastpaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastpaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastpaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
