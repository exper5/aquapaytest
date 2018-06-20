import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChsupplierreportComponent } from './chsupplierreport.component';

describe('ChsupplierreportComponent', () => {
  let component: ChsupplierreportComponent;
  let fixture: ComponentFixture<ChsupplierreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChsupplierreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChsupplierreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
