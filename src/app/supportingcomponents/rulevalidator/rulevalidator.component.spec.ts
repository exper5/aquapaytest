import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RulevalidatorComponent } from './rulevalidator.component';

describe('RulevalidatorComponent', () => {
  let component: RulevalidatorComponent;
  let fixture: ComponentFixture<RulevalidatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RulevalidatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RulevalidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
