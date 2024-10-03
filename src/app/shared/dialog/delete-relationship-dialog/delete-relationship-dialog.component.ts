import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'e2-delete-relationship-dialog',
  templateUrl: './delete-relationship-dialog.component.html',
  styleUrls: ['./delete-relationship-dialog.component.scss']
})
export class DeleteRelationshipDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<any>) { }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close('success');
  }
}
