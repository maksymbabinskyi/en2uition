import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YesnoRadioSliderComponent } from './yesno-radio-slider.component';

describe('YesnoRadioSliderComponent', () => {
  let component: YesnoRadioSliderComponent;
  let fixture: ComponentFixture<YesnoRadioSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [YesnoRadioSliderComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YesnoRadioSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
