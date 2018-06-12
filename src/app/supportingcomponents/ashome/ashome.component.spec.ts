import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AshomeComponent } from './ashome.component';

describe('AshomeComponent', () => {
  let component: AshomeComponent;
  let fixture: ComponentFixture<AshomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AshomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AshomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
