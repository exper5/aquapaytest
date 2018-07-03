import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CareviewusersComponent } from './careviewusers.component';

describe('CareviewusersComponent', () => {
  let component: CareviewusersComponent;
  let fixture: ComponentFixture<CareviewusersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CareviewusersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareviewusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
