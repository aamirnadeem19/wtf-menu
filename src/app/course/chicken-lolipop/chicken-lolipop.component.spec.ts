import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChickenLolipopComponent } from './chicken-lolipop.component';

describe('ChickenLolipopComponent', () => {
  let component: ChickenLolipopComponent;
  let fixture: ComponentFixture<ChickenLolipopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChickenLolipopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChickenLolipopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
