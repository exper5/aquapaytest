import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Caorganisation2Component } from './caorganisation2.component';

describe('Caorganisation2Component', () => {
  let component: Caorganisation2Component;
  let fixture: ComponentFixture<Caorganisation2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Caorganisation2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Caorganisation2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
