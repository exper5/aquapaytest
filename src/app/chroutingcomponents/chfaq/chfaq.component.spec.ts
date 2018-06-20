import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChfaqComponent } from './chfaq.component';

describe('ChfaqComponent', () => {
  let component: ChfaqComponent;
  let fixture: ComponentFixture<ChfaqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChfaqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChfaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
