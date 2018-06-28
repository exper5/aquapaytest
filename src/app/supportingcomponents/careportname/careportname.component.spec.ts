import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CareportnameComponent } from './careportname.component';

describe('CareportnameComponent', () => {
  let component: CareportnameComponent;
  let fixture: ComponentFixture<CareportnameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CareportnameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareportnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
