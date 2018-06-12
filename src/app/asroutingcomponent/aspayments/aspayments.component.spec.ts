import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AspaymentsComponent } from './aspayments.component';

describe('AspaymentsComponent', () => {
  let component: AspaymentsComponent;
  let fixture: ComponentFixture<AspaymentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AspaymentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AspaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
