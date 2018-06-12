import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AstopcardactivityComponent } from './astopcardactivity.component';

describe('AstopcardactivityComponent', () => {
  let component: AstopcardactivityComponent;
  let fixture: ComponentFixture<AstopcardactivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AstopcardactivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AstopcardactivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
