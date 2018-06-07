import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardactivityComponent } from './cardactivity.component';

describe('CardactivityComponent', () => {
  let component: CardactivityComponent;
  let fixture: ComponentFixture<CardactivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardactivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardactivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
