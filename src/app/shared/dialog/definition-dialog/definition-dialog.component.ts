import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'e2-definition-dialog',
  templateUrl: './definition-dialog.component.html',
  styleUrls: ['./definition-dialog.component.scss']
})
export class DefinitionDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: { definition: { title: string, description: string }[] }) {
  }

  ngOnInit() {
  }

}
