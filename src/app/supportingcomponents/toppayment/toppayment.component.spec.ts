import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToppaymentComponent } from './toppayment.component';

describe('ToppaymentComponent', () => {
  let component: ToppaymentComponent;
  let fixture: ComponentFixture<ToppaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToppaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToppaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
