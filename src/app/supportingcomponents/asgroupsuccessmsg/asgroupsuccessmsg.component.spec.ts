import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsgroupsuccessmsgComponent } from './asgroupsuccessmsg.component';

describe('AsgroupsuccessmsgComponent', () => {
  let component: AsgroupsuccessmsgComponent;
  let fixture: ComponentFixture<AsgroupsuccessmsgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsgroupsuccessmsgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsgroupsuccessmsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
