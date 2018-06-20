import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrulevalidationComponent } from './crulevalidation.component';

describe('CrulevalidationComponent', () => {
  let component: CrulevalidationComponent;
  let fixture: ComponentFixture<CrulevalidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrulevalidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrulevalidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
