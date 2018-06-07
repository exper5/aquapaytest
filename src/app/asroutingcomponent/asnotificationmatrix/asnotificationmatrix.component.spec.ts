import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsnotificationmatrixComponent } from './asnotificationmatrix.component';

describe('AsnotificationmatrixComponent', () => {
  let component: AsnotificationmatrixComponent;
  let fixture: ComponentFixture<AsnotificationmatrixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsnotificationmatrixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsnotificationmatrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
