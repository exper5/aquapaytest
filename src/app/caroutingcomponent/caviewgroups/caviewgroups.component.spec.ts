import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaviewgroupsComponent } from './caviewgroups.component';

describe('CaviewgroupsComponent', () => {
  let component: CaviewgroupsComponent;
  let fixture: ComponentFixture<CaviewgroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaviewgroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaviewgroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
