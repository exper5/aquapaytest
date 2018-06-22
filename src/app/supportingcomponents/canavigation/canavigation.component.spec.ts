import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanavigationComponent } from './canavigation.component';

describe('CanavigationComponent', () => {
  let component: CanavigationComponent;
  let fixture: ComponentFixture<CanavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
