import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChsupplierlistComponent } from './chsupplierlist.component';

describe('ChsupplierlistComponent', () => {
  let component: ChsupplierlistComponent;
  let fixture: ComponentFixture<ChsupplierlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChsupplierlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChsupplierlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
