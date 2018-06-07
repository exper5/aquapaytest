import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsuserapprovemsgComponent } from './asuserapprovemsg.component';

describe('AsuserapprovemsgComponent', () => {
  let component: AsuserapprovemsgComponent;
  let fixture: ComponentFixture<AsuserapprovemsgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsuserapprovemsgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsuserapprovemsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
