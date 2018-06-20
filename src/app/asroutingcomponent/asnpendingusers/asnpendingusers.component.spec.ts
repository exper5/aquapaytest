import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsnpendingusersComponent } from './asnpendingusers.component';

describe('AsnpendingusersComponent', () => {
  let component: AsnpendingusersComponent;
  let fixture: ComponentFixture<AsnpendingusersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsnpendingusersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsnpendingusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
