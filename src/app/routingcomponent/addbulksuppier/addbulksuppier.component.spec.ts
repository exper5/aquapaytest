import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbulksuppierComponent } from './addbulksuppier.component';

describe('AddbulksuppierComponent', () => {
  let component: AddbulksuppierComponent;
  let fixture: ComponentFixture<AddbulksuppierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddbulksuppierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddbulksuppierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
