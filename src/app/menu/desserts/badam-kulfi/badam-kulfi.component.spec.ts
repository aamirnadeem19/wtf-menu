import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BadamKulfiComponent } from './badam-kulfi.component';

describe('BadamKulfiComponent', () => {
  let component: BadamKulfiComponent;
  let fixture: ComponentFixture<BadamKulfiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BadamKulfiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BadamKulfiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
