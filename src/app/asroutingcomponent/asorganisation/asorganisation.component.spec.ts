import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsorganisationComponent } from './asorganisation.component';

describe('AsorganisationComponent', () => {
  let component: AsorganisationComponent;
  let fixture: ComponentFixture<AsorganisationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsorganisationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsorganisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
