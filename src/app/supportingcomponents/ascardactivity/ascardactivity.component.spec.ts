import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AscardactivityComponent } from './ascardactivity.component';

describe('AscardactivityComponent', () => {
  let component: AscardactivityComponent;
  let fixture: ComponentFixture<AscardactivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AscardactivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AscardactivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
