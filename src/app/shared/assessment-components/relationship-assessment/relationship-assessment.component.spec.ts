import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelationshipAssessmentComponent } from './relationship-assessment.component';

describe('RelationshipAssessmentComponent', () => {
  let component: RelationshipAssessmentComponent;
  let fixture: ComponentFixture<RelationshipAssessmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RelationshipAssessmentComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelationshipAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
