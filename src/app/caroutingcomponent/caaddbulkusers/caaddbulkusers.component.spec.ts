import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaaddbulkusersComponent } from './caaddbulkusers.component';

describe('CaaddbulkusersComponent', () => {
  let component: CaaddbulkusersComponent;
  let fixture: ComponentFixture<CaaddbulkusersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaaddbulkusersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaaddbulkusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
