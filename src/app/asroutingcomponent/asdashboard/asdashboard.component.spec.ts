import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsdashboardComponent } from './asdashboard.component';

describe('AsdashboardComponent', () => {
  let component: AsdashboardComponent;
  let fixture: ComponentFixture<AsdashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsdashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
