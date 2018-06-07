import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsapproveotpComponent } from './asapproveotp.component';

describe('AsapproveotpComponent', () => {
  let component: AsapproveotpComponent;
  let fixture: ComponentFixture<AsapproveotpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsapproveotpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsapproveotpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
