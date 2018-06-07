import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsuserslistreportComponent } from './asuserslistreport.component';

describe('AsuserslistreportComponent', () => {
  let component: AsuserslistreportComponent;
  let fixture: ComponentFixture<AsuserslistreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsuserslistreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsuserslistreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
