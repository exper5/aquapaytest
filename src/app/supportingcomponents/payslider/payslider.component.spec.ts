import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaysliderComponent } from './payslider.component';

describe('PaysliderComponent', () => {
  let component: PaysliderComponent;
  let fixture: ComponentFixture<PaysliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaysliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaysliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
