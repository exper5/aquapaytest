import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChpaystatusComponent } from './chpaystatus.component';

describe('ChpaystatusComponent', () => {
  let component: ChpaystatusComponent;
  let fixture: ComponentFixture<ChpaystatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChpaystatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChpaystatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
