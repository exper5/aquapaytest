import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChpaymentsuccessmsgComponent } from './chpaymentsuccessmsg.component';

describe('ChpaymentsuccessmsgComponent', () => {
  let component: ChpaymentsuccessmsgComponent;
  let fixture: ComponentFixture<ChpaymentsuccessmsgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChpaymentsuccessmsgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChpaymentsuccessmsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
