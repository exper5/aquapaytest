import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChhomeComponent } from './chhome.component';

describe('ChhomeComponent', () => {
  let component: ChhomeComponent;
  let fixture: ComponentFixture<ChhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
