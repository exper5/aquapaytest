import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsviewrulesComponent } from './asviewrules.component';

describe('AsviewrulesComponent', () => {
  let component: AsviewrulesComponent;
  let fixture: ComponentFixture<AsviewrulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsviewrulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsviewrulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
