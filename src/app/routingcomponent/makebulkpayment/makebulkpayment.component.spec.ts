import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakebulkpaymentComponent } from './makebulkpayment.component';

describe('MakebulkpaymentComponent', () => {
  let component: MakebulkpaymentComponent;
  let fixture: ComponentFixture<MakebulkpaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakebulkpaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakebulkpaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
