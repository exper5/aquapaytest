import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsuserreportComponent } from './asuserreport.component';

describe('AsuserreportComponent', () => {
  let component: AsuserreportComponent;
  let fixture: ComponentFixture<AsuserreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsuserreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsuserreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
