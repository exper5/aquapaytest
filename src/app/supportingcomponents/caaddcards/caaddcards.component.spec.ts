import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaaddcardsComponent } from './caaddcards.component';

describe('CaaddcardsComponent', () => {
  let component: CaaddcardsComponent;
  let fixture: ComponentFixture<CaaddcardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaaddcardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaaddcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
