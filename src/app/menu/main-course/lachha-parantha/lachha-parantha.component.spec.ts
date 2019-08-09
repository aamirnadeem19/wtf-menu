import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LachhaParanthaComponent } from './lachha-parantha.component';

describe('LachhaParanthaComponent', () => {
  let component: LachhaParanthaComponent;
  let fixture: ComponentFixture<LachhaParanthaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LachhaParanthaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LachhaParanthaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
