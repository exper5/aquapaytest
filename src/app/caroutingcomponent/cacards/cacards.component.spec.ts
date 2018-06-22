import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CacardsComponent } from './cacards.component';

describe('CacardsComponent', () => {
  let component: CacardsComponent;
  let fixture: ComponentFixture<CacardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CacardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CacardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
