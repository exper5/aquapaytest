import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CauserlistComponent } from './causerlist.component';

describe('CauserlistComponent', () => {
  let component: CauserlistComponent;
  let fixture: ComponentFixture<CauserlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CauserlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CauserlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
