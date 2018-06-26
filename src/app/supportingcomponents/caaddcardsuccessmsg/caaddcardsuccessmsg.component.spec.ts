import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaaddcardsuccessmsgComponent } from './caaddcardsuccessmsg.component';

describe('CaaddcardsuccessmsgComponent', () => {
  let component: CaaddcardsuccessmsgComponent;
  let fixture: ComponentFixture<CaaddcardsuccessmsgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaaddcardsuccessmsgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaaddcardsuccessmsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
