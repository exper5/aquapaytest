import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaycardtabComponent } from './paycardtab.component';

describe('PaycardtabComponent', () => {
  let component: PaycardtabComponent;
  let fixture: ComponentFixture<PaycardtabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaycardtabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaycardtabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
