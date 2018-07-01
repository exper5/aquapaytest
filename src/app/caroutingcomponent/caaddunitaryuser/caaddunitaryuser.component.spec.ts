import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaaddunitaryuserComponent } from './caaddunitaryuser.component';

describe('CaaddunitaryuserComponent', () => {
  let component: CaaddunitaryuserComponent;
  let fixture: ComponentFixture<CaaddunitaryuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaaddunitaryuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaaddunitaryuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
