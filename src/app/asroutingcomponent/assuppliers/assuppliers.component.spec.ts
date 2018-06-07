import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssuppliersComponent } from './assuppliers.component';

describe('AssuppliersComponent', () => {
  let component: AssuppliersComponent;
  let fixture: ComponentFixture<AssuppliersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssuppliersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssuppliersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
