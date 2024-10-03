import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TriangularScoreSliderComponent } from './triangular-score-slider.component';

describe('TriangularScoreSliderComponent', () => {
  let component: TriangularScoreSliderComponent;
  let fixture: ComponentFixture<TriangularScoreSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TriangularScoreSliderComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TriangularScoreSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
