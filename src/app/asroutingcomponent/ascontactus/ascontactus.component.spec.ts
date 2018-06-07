import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AscontactusComponent } from './ascontactus.component';

describe('AscontactusComponent', () => {
  let component: AscontactusComponent;
  let fixture: ComponentFixture<AscontactusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AscontactusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AscontactusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
