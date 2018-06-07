import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsgroupspendingComponent } from './asgroupspending.component';

describe('AsgroupspendingComponent', () => {
  let component: AsgroupspendingComponent;
  let fixture: ComponentFixture<AsgroupspendingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsgroupspendingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsgroupspendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
