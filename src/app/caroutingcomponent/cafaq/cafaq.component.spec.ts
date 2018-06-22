import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CafaqComponent } from './cafaq.component';

describe('CafaqComponent', () => {
  let component: CafaqComponent;
  let fixture: ComponentFixture<CafaqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CafaqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CafaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
