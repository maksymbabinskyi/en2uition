import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelQuestionSliderComponent } from './level-question-slider.component';

describe('LevelQuestionSliderComponent', () => {
  let component: LevelQuestionSliderComponent;
  let fixture: ComponentFixture<LevelQuestionSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LevelQuestionSliderComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelQuestionSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
