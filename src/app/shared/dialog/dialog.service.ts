import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material';
import { ComponentType } from '@angular/cdk/portal';
import { DialogContainerComponent } from './dialog-container.component';
import { Router } from '@angular/router';

@Injectable()
export class DialogService {

  constructor(private matDialog: MatDialog, private router: Router) {
    // this.router.events
    //   .pipe(filter((event: RouterEvent) => event instanceof NavigationStart))
    //   .subscribe(() => this.matDialog.closeAll());
  }

  open(Component: ComponentType<any>, config?: MatDialogConfig): MatDialogRef<DialogContainerComponent> {
    return this.matDialog.open(DialogContainerComponent, {
      ...config,
      data: {
        ...(config && config.data),
        Component
      },
      backdropClass: 'e2-dialog__backdrop',
      panelClass: 'e2-dialog__panel'
    });
  }
}
