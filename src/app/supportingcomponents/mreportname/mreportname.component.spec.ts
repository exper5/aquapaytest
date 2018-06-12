import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MreportnameComponent } from './mreportname.component';

describe('MreportnameComponent', () => {
  let component: MreportnameComponent;
  let fixture: ComponentFixture<MreportnameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MreportnameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MreportnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
