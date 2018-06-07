import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportnameComponent } from './reportname.component';

describe('ReportnameComponent', () => {
  let component: ReportnameComponent;
  let fixture: ComponentFixture<ReportnameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportnameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
