import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChcardsliderComponent } from './chcardslider.component';

describe('ChcardsliderComponent', () => {
  let component: ChcardsliderComponent;
  let fixture: ComponentFixture<ChcardsliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChcardsliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChcardsliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
