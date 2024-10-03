import { Component, OnDestroy, OnInit } from '@angular/core';
import { RelationshipsApiService } from '../../shared/api/relationships-api.service';
import { Subject } from 'rxjs';
import { Relationship } from '../../shared/api/relationship';
import { DialogService } from '../../shared/dialog/dialog.service';
import { takeUntil } from 'rxjs/operators';
import { ImagesApiService, ImageType } from '../../shared/api/images-api.service';
import { AddRelationshipDialogComponent } from '../../shared/dialog';
import { NavigationService } from '../../shared/layout/components/navigation/navigation.service';
import { DeleteRelationshipDialogComponent } from '../../shared/dialog/delete-relationship-dialog/delete-relationship-dialog.component';

@Component({
  selector: 'e2-relationships',
  templateUrl: './relationships.component.html',
  styleUrls: ['./relationships.component.scss'],
  providers: [DialogService]
})
export class RelationshipsComponent implements OnInit, OnDestroy {

  relationships: Relationship[];

  private unsubscribe$ = new Subject();

  constructor(private relationshipsApiService: RelationshipsApiService,
              private dialogService: DialogService,
              private imagesApiService: ImagesApiService,
              private navigationService: NavigationService) {
  }

  ngOnInit() {
    this.loadRelationships();
  }

  async loadRelationships() {
    this.navigationService.loading.next(true);
    this.relationships = await this.relationshipsApiService.getRelationships().toPromise();
    this.navigationService.loading.next(false);
  }

  addRelationship() {
    this.dialogService.open(AddRelationshipDialogComponent).afterClosed()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(added => {
        if (added) {
          this.loadRelationships();
        }
      });
  }

  async removeRelationship(relationship: Relationship) {
    const that = this;
    this.dialogService.open(DeleteRelationshipDialogComponent).afterClosed()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(async function(status) {
        if (status === 'success') {
          await that.relationshipsApiService.removeRelationship(relationship.id).toPromise();
          await that.loadRelationships();
        }
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  async photoChanged(event, relationship: Relationship) {
    const photo = event.target.files[0];
    event.target.value = '';

    if (relationship.image) {
      await this.removePhoto(relationship, true);
    }
    await this.imagesApiService.upload(relationship.id, photo, ImageType.Relationship).toPromise();
    this.loadRelationships();
  }

  async removePhoto(relationship, skipReload?: boolean) {
    await this.imagesApiService.delete(relationship.image.id).toPromise();

    if (!skipReload) {
      this.loadRelationships();
    }
  }

  async changeStatus(relationship: Relationship) {
    await this.relationshipsApiService.update(relationship.id, {...relationship, aging: +!relationship.aging}).toPromise();

    this.loadRelationships();
  }
}
