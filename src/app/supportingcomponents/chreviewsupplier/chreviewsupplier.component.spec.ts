import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChreviewsupplierComponent } from './chreviewsupplier.component';

describe('ChreviewsupplierComponent', () => {
  let component: ChreviewsupplierComponent;
  let fixture: ComponentFixture<ChreviewsupplierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChreviewsupplierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChreviewsupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
