import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CagroupsComponent } from './cagroups.component';

describe('CagroupsComponent', () => {
  let component: CagroupsComponent;
  let fixture: ComponentFixture<CagroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CagroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CagroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
