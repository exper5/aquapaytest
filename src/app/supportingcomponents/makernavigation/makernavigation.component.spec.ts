import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakernavigationComponent } from './makernavigation.component';

describe('MakernavigationComponent', () => {
  let component: MakernavigationComponent;
  let fixture: ComponentFixture<MakernavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakernavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakernavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
