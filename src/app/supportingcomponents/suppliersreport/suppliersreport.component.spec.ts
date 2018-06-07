import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppliersreportComponent } from './suppliersreport.component';

describe('SuppliersreportComponent', () => {
  let component: SuppliersreportComponent;
  let fixture: ComponentFixture<SuppliersreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuppliersreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuppliersreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
