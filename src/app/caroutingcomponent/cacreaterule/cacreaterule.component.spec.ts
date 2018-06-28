import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CacreateruleComponent } from './cacreaterule.component';

describe('CacreateruleComponent', () => {
  let component: CacreateruleComponent;
  let fixture: ComponentFixture<CacreateruleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CacreateruleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CacreateruleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
