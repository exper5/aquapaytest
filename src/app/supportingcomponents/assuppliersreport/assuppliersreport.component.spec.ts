import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssuppliersreportComponent } from './assuppliersreport.component';

describe('AssuppliersreportComponent', () => {
  let component: AssuppliersreportComponent;
  let fixture: ComponentFixture<AssuppliersreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssuppliersreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssuppliersreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
