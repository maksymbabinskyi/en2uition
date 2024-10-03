import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PercentagelineComponent } from './percentageline.component';

describe('PercentagelineComponent', () => {
  let component: PercentagelineComponent;
  let fixture: ComponentFixture<PercentagelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PercentagelineComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PercentagelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
