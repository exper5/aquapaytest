import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasuppliersreportComponent } from './casuppliersreport.component';

describe('CasuppliersreportComponent', () => {
  let component: CasuppliersreportComponent;
  let fixture: ComponentFixture<CasuppliersreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasuppliersreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasuppliersreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
