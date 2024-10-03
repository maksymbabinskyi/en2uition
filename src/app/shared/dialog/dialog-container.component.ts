import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ComponentPortal, ComponentType } from '@angular/cdk/portal';

@Component({
  selector: 'e2-dialog-container',
  template: `
    <div class="e2-dialog_close" (click)="close()">
      <span></span><span></span>
    </div>
    <div class="e2-dialog_content" style="margin-top:80px;border-top:1px solid #e4e6e6;">
      <ng-template [cdkPortalOutlet]="portal"></ng-template>
    </div>
  `,
  host: {class: 'e2-dialog__container', style: 'background: #fff'}
})
export class DialogContainerComponent implements OnInit {
  portal: ComponentPortal<any>;

  constructor(
    public dialogRef: MatDialogRef<DialogContainerComponent>,
    @Inject(MAT_DIALOG_DATA) private data: { Component: ComponentType<any> }) {
  }

  ngOnInit() {
    this.portal = new ComponentPortal(this.data.Component);
  }

  close() {
    this.dialogRef.close();
  }
}
