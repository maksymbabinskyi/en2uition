import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAssessmentBasedOnTriangularTheoryComponent } from './get-assessment-based-on-triangular-theory.component';

describe('GetAssessmentBasedOnTriangularTheoryComponent', () => {
  let component: GetAssessmentBasedOnTriangularTheoryComponent;
  let fixture: ComponentFixture<GetAssessmentBasedOnTriangularTheoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GetAssessmentBasedOnTriangularTheoryComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAssessmentBasedOnTriangularTheoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
