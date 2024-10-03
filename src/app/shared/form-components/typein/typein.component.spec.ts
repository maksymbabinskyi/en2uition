import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeinComponent } from './typein.component';

describe('TypeinComponent', () => {
  let component: TypeinComponent;
  let fixture: ComponentFixture<TypeinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TypeinComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
