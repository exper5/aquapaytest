import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupstatusComponent } from './supstatus.component';

describe('SupstatusComponent', () => {
  let component: SupstatusComponent;
  let fixture: ComponentFixture<SupstatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupstatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
