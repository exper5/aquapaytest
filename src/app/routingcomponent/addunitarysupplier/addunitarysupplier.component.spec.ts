import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddunitarysupplierComponent } from './addunitarysupplier.component';

describe('AddunitarysupplierComponent', () => {
  let component: AddunitarysupplierComponent;
  let fixture: ComponentFixture<AddunitarysupplierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddunitarysupplierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddunitarysupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
