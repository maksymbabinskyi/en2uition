import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TriangularAssessmentComponent } from './triangular-assessment.component';

describe('TriangularAssessmentComponent', () => {
  let component: TriangularAssessmentComponent;
  let fixture: ComponentFixture<TriangularAssessmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TriangularAssessmentComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TriangularAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
