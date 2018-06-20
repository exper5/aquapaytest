import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChcardsComponent } from './chcards.component';

describe('ChcardsComponent', () => {
  let component: ChcardsComponent;
  let fixture: ComponentFixture<ChcardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChcardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
