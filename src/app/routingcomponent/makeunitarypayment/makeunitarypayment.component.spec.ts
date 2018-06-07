import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeunitarypaymentComponent } from './makeunitarypayment.component';

describe('MakeunitarypaymentComponent', () => {
  let component: MakeunitarypaymentComponent;
  let fixture: ComponentFixture<MakeunitarypaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeunitarypaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeunitarypaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
