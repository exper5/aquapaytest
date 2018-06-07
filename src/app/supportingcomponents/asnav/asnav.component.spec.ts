import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsnavComponent } from './asnav.component';

describe('AsnavComponent', () => {
  let component: AsnavComponent;
  let fixture: ComponentFixture<AsnavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsnavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
