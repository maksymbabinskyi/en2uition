import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteRelationshipDialogComponent } from './delete-relationship-dialog.component';

describe('DeleteRelationshipDialogComponent', () => {
  let component: DeleteRelationshipDialogComponent;
  let fixture: ComponentFixture<DeleteRelationshipDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteRelationshipDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteRelationshipDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
