import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectcardComponent } from './selectcard.component';

describe('SelectcardComponent', () => {
  let component: SelectcardComponent;
  let fixture: ComponentFixture<SelectcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
