import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { McontactusComponent } from './mcontactus.component';

describe('McontactusComponent', () => {
  let component: McontactusComponent;
  let fixture: ComponentFixture<McontactusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ McontactusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(McontactusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
