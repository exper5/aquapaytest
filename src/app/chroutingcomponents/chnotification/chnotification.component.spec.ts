import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChnotificationComponent } from './chnotification.component';

describe('ChnotificationComponent', () => {
  let component: ChnotificationComponent;
  let fixture: ComponentFixture<ChnotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChnotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChnotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
