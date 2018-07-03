import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CauserreviewdetailsComponent } from './causerreviewdetails.component';

describe('CauserreviewdetailsComponent', () => {
  let component: CauserreviewdetailsComponent;
  let fixture: ComponentFixture<CauserreviewdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CauserreviewdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CauserreviewdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
