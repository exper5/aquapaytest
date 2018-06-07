import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsfaqComponent } from './asfaq.component';

describe('AsfaqComponent', () => {
  let component: AsfaqComponent;
  let fixture: ComponentFixture<AsfaqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsfaqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsfaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
