import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChreviewpaymentComponent } from './chreviewpayment.component';

describe('ChreviewpaymentComponent', () => {
  let component: ChreviewpaymentComponent;
  let fixture: ComponentFixture<ChreviewpaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChreviewpaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChreviewpaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
