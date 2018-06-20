import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckernavigationComponent } from './checkernavigation.component';

describe('CheckernavigationComponent', () => {
  let component: CheckernavigationComponent;
  let fixture: ComponentFixture<CheckernavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckernavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckernavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
