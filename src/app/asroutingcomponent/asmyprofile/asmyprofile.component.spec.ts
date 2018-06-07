import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsmyprofileComponent } from './asmyprofile.component';

describe('AsmyprofileComponent', () => {
  let component: AsmyprofileComponent;
  let fixture: ComponentFixture<AsmyprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsmyprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsmyprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
