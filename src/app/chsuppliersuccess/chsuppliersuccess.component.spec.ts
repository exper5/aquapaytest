import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChsuppliersuccessComponent } from './chsuppliersuccess.component';

describe('ChsuppliersuccessComponent', () => {
  let component: ChsuppliersuccessComponent;
  let fixture: ComponentFixture<ChsuppliersuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChsuppliersuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChsuppliersuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
