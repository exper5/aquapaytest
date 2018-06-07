import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MfaqComponent } from './mfaq.component';

describe('MfaqComponent', () => {
  let component: MfaqComponent;
  let fixture: ComponentFixture<MfaqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MfaqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MfaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
