import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefinitionDialogComponent } from './definition-dialog.component';

describe('DefinitionDialogComponent', () => {
  let component: DefinitionDialogComponent;
  let fixture: ComponentFixture<DefinitionDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DefinitionDialogComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefinitionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
