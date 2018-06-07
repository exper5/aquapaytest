import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MnotificationmatrixComponent } from './mnotificationmatrix.component';

describe('MnotificationmatrixComponent', () => {
  let component: MnotificationmatrixComponent;
  let fixture: ComponentFixture<MnotificationmatrixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MnotificationmatrixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MnotificationmatrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
