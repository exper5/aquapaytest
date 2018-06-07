import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { McardsComponent } from './mcards.component';

describe('McardsComponent', () => {
  let component: McardsComponent;
  let fixture: ComponentFixture<McardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ McardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(McardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
