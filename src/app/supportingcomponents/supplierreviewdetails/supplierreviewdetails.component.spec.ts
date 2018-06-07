import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierreviewdetailsComponent } from './supplierreviewdetails.component';

describe('SupplierreviewdetailsComponent', () => {
  let component: SupplierreviewdetailsComponent;
  let fixture: ComponentFixture<SupplierreviewdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierreviewdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierreviewdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
