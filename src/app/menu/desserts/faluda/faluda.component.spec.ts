import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaludaComponent } from './faluda.component';

describe('FaludaComponent', () => {
  let component: FaludaComponent;
  let fixture: ComponentFixture<FaludaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaludaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaludaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
