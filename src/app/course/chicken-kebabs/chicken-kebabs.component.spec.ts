import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChickenKebabsComponent } from './chicken-kebabs.component';

describe('ChickenKebabsComponent', () => {
  let component: ChickenKebabsComponent;
  let fixture: ComponentFixture<ChickenKebabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChickenKebabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChickenKebabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
