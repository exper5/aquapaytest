import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsrulesucessmsgComponent } from './asrulesucessmsg.component';

describe('AsrulesucessmsgComponent', () => {
  let component: AsrulesucessmsgComponent;
  let fixture: ComponentFixture<AsrulesucessmsgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsrulesucessmsgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsrulesucessmsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
