import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChpendingsupplierComponent } from './chpendingsupplier.component';

describe('ChpendingsupplierComponent', () => {
  let component: ChpendingsupplierComponent;
  let fixture: ComponentFixture<ChpendingsupplierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChpendingsupplierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChpendingsupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
