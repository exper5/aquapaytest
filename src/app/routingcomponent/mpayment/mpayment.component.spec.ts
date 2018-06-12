import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MpaymentComponent } from './mpayment.component';

describe('MpaymentComponent', () => {
  let component: MpaymentComponent;
  let fixture: ComponentFixture<MpaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MpaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MpaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
