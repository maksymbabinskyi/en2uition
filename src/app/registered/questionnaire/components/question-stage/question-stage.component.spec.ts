import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionStageComponent } from './question-stage.component';

describe('QuestionStageComponent', () => {
  let component: QuestionStageComponent;
  let fixture: ComponentFixture<QuestionStageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [QuestionStageComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
