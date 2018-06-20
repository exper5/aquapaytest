import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChcontactusComponent } from './chcontactus.component';

describe('ChcontactusComponent', () => {
  let component: ChcontactusComponent;
  let fixture: ComponentFixture<ChcontactusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChcontactusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChcontactusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
