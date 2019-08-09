import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CocaColaComponent } from './coca-cola.component';

describe('CocaColaComponent', () => {
  let component: CocaColaComponent;
  let fixture: ComponentFixture<CocaColaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CocaColaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CocaColaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
