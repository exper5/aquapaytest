import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanotificationmatrixComponent } from './canotificationmatrix.component';

describe('CanotificationmatrixComponent', () => {
  let component: CanotificationmatrixComponent;
  let fixture: ComponentFixture<CanotificationmatrixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanotificationmatrixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanotificationmatrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
