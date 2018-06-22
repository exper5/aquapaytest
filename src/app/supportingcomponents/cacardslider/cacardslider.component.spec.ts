import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CacardsliderComponent } from './cacardslider.component';

describe('CacardsliderComponent', () => {
  let component: CacardsliderComponent;
  let fixture: ComponentFixture<CacardsliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CacardsliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CacardsliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
