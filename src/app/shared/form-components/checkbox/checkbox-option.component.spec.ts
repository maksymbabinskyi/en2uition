import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxOptionComponent } from './checkbox-option.component';

describe('CheckboxOptionComponent', () => {
  let component: CheckboxOptionComponent;
  let fixture: ComponentFixture<CheckboxOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CheckboxOptionComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
