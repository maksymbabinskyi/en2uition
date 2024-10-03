import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdviceBasedOnTheTriangularTheoryComponent } from './advice-based-on-the-triangular-theory.component';

describe('AdviceBasedOnTheTriangularTheoryComponent', () => {
  let component: AdviceBasedOnTheTriangularTheoryComponent;
  let fixture: ComponentFixture<AdviceBasedOnTheTriangularTheoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdviceBasedOnTheTriangularTheoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdviceBasedOnTheTriangularTheoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
