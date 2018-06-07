import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsapprovecardComponent } from './asapprovecard.component';

describe('AsapprovecardComponent', () => {
  let component: AsapprovecardComponent;
  let fixture: ComponentFixture<AsapprovecardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsapprovecardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsapprovecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
