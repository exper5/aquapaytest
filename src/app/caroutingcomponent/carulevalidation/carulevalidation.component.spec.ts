import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarulevalidationComponent } from './carulevalidation.component';

describe('CarulevalidationComponent', () => {
  let component: CarulevalidationComponent;
  let fixture: ComponentFixture<CarulevalidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarulevalidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarulevalidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
