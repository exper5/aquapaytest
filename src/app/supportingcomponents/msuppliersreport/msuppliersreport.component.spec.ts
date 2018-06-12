import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsuppliersreportComponent } from './msuppliersreport.component';

describe('MsuppliersreportComponent', () => {
  let component: MsuppliersreportComponent;
  let fixture: ComponentFixture<MsuppliersreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsuppliersreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsuppliersreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
