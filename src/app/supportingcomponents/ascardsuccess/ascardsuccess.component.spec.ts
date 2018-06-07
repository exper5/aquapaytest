import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AscardsuccessComponent } from './ascardsuccess.component';

describe('AscardsuccessComponent', () => {
  let component: AscardsuccessComponent;
  let fixture: ComponentFixture<AscardsuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AscardsuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AscardsuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
