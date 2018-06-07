import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AscardsComponent } from './ascards.component';

describe('AscardsComponent', () => {
  let component: AscardsComponent;
  let fixture: ComponentFixture<AscardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AscardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AscardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
