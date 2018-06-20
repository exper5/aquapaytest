import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChdashboardComponent } from './chdashboard.component';

describe('ChdashboardComponent', () => {
  let component: ChdashboardComponent;
  let fixture: ComponentFixture<ChdashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChdashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
