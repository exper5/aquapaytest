import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasupplierComponent } from './casupplier.component';

describe('CasupplierComponent', () => {
  let component: CasupplierComponent;
  let fixture: ComponentFixture<CasupplierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasupplierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
