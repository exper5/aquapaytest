import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsreviewcardComponent } from './asreviewcard.component';

describe('AsreviewcardComponent', () => {
  let component: AsreviewcardComponent;
  let fixture: ComponentFixture<AsreviewcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsreviewcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsreviewcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
