import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CamyprofileComponent } from './camyprofile.component';

describe('CamyprofileComponent', () => {
  let component: CamyprofileComponent;
  let fixture: ComponentFixture<CamyprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CamyprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamyprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
