import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectcarddetailsComponent } from './selectcarddetails.component';

describe('SelectcarddetailsComponent', () => {
  let component: SelectcarddetailsComponent;
  let fixture: ComponentFixture<SelectcarddetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectcarddetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectcarddetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
