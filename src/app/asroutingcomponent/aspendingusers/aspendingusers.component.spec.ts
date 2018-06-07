import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AspendingusersComponent } from './aspendingusers.component';

describe('AspendingusersComponent', () => {
  let component: AspendingusersComponent;
  let fixture: ComponentFixture<AspendingusersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AspendingusersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AspendingusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
