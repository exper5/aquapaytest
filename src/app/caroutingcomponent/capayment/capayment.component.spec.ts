import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapaymentComponent } from './capayment.component';

describe('CapaymentComponent', () => {
  let component: CapaymentComponent;
  let fixture: ComponentFixture<CapaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
