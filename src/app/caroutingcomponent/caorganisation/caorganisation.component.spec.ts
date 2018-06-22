import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaorganisationComponent } from './caorganisation.component';

describe('CaorganisationComponent', () => {
  let component: CaorganisationComponent;
  let fixture: ComponentFixture<CaorganisationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaorganisationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaorganisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
