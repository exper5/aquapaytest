import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CauserreportComponent } from './causerreport.component';

describe('CauserreportComponent', () => {
  let component: CauserreportComponent;
  let fixture: ComponentFixture<CauserreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CauserreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CauserreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
