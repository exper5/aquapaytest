import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChmyprofileComponent } from './chmyprofile.component';

describe('ChmyprofileComponent', () => {
  let component: ChmyprofileComponent;
  let fixture: ComponentFixture<ChmyprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChmyprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChmyprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
