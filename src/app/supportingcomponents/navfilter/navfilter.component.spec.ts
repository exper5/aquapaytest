import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavfilterComponent } from './navfilter.component';

describe('NavfilterComponent', () => {
  let component: NavfilterComponent;
  let fixture: ComponentFixture<NavfilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavfilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavfilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
