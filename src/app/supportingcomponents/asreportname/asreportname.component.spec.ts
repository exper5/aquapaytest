import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsreportnameComponent } from './asreportname.component';

describe('AsreportnameComponent', () => {
  let component: AsreportnameComponent;
  let fixture: ComponentFixture<AsreportnameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsreportnameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsreportnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
