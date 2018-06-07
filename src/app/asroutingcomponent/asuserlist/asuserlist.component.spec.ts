import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsuserlistComponent } from './asuserlist.component';

describe('AsuserlistComponent', () => {
  let component: AsuserlistComponent;
  let fixture: ComponentFixture<AsuserlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsuserlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsuserlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
