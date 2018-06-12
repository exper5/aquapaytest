import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AscardsliderComponent } from './ascardslider.component';

describe('AscardsliderComponent', () => {
  let component: AscardsliderComponent;
  let fixture: ComponentFixture<AscardsliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AscardsliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AscardsliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
