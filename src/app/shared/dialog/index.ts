import { DialogTitleDirective } from './dialog-title.directive';
import { DialogContainerComponent } from './dialog-container.component';
import { DefinitionDialogComponent } from './definition-dialog/definition-dialog.component';
import { AddRelationshipDialogComponent } from './add-relationship-dialog/add-relationship-dialog.component';
import { DeleteRelationshipDialogComponent } from './delete-relationship-dialog/delete-relationship-dialog.component';
import { ChangeNameDialogComponent } from './change-name-dialog/change-name-dialog.component';
import { ChangePasswordDialogComponent } from './change-password-dialog/change-password-dialog.component';

export const directives: any[] = [DialogTitleDirective];
export const entryComponents: any[] = [
    DialogContainerComponent,
    DefinitionDialogComponent,
    AddRelationshipDialogComponent,
    DeleteRelationshipDialogComponent,
    ChangeNameDialogComponent,
    ChangePasswordDialogComponent
];

export * from './dialog-container.component';
export * from './dialog-title.directive';
export * from './definition-dialog/definition-dialog.component';
export * from './add-relationship-dialog/add-relationship-dialog.component';
export * from './delete-relationship-dialog/delete-relationship-dialog.component';
export * from './change-name-dialog/change-name-dialog.component';
export * from './change-password-dialog/change-password-dialog.component';
