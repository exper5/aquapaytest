import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChreportnameComponent } from './chreportname.component';

describe('ChreportnameComponent', () => {
  let component: ChreportnameComponent;
  let fixture: ComponentFixture<ChreportnameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChreportnameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChreportnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
