import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CacontactusComponent } from './cacontactus.component';

describe('CacontactusComponent', () => {
  let component: CacontactusComponent;
  let fixture: ComponentFixture<CacontactusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CacontactusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CacontactusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
