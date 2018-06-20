import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChsuprequestComponent } from './chsuprequest.component';

describe('ChsuprequestComponent', () => {
  let component: ChsuprequestComponent;
  let fixture: ComponentFixture<ChsuprequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChsuprequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChsuprequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
