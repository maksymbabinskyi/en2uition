import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelationshipScoreSliderComponent } from './relationship-score-slider.component';

describe('RelationshipScoreSliderComponent', () => {
  let component: RelationshipScoreSliderComponent;
  let fixture: ComponentFixture<RelationshipScoreSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RelationshipScoreSliderComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelationshipScoreSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
