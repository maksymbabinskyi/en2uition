import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YesnoRadioComponent } from './yesno-radio.component';

describe('YesnoRadioComponent', () => {
  let component: YesnoRadioComponent;
  let fixture: ComponentFixture<YesnoRadioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [YesnoRadioComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YesnoRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
