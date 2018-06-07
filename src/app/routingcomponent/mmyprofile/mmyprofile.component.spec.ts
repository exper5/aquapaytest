import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MmyprofileComponent } from './mmyprofile.component';

describe('MmyprofileComponent', () => {
  let component: MmyprofileComponent;
  let fixture: ComponentFixture<MmyprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MmyprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MmyprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
