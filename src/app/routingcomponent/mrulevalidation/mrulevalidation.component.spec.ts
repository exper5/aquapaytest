import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MrulevalidationComponent } from './mrulevalidation.component';

describe('MrulevalidationComponent', () => {
  let component: MrulevalidationComponent;
  let fixture: ComponentFixture<MrulevalidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MrulevalidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MrulevalidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
