import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsgrouplistComponent } from './asgrouplist.component';

describe('AsgrouplistComponent', () => {
  let component: AsgrouplistComponent;
  let fixture: ComponentFixture<AsgrouplistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsgrouplistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsgrouplistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
