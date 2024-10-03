import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { RelationshipsApiService } from '../../api/relationships-api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ImagesApiService, ImageType } from '../../api/images-api.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'e2-add-relationship-dialog',
  templateUrl: './add-relationship-dialog.component.html',
  styleUrls: ['./add-relationship-dialog.component.scss']
})
export class AddRelationshipDialogComponent implements OnInit {

  previewURL: string;
  form: FormGroup;

  private photo: File;

  constructor(private dialogRef: MatDialogRef<any>,
              private fb: FormBuilder,
              private relationshipsApiService: RelationshipsApiService,
              private imagesApiService: ImagesApiService,
              private authService: AuthService) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      partnerName: ['', Validators.required],
      aging: ['', Validators.required]
    });
  }

  photoChanged(event) {
    this.photo = event.target.files[0];
    event.target.value = '';

    this.previewURL = URL.createObjectURL(this.photo);
  }

  removePhoto() {
    this.photo = null;
    this.previewURL = null;
  }

  async create() {
    if (this.form.invalid) {
      return;
    }

    const relationship = await this.relationshipsApiService.addRelationship(this.form.value, this.authService.getUser().id).toPromise();

    if (this.photo) {
      await this.imagesApiService.upload(relationship.id, this.photo, ImageType.Relationship).toPromise();
    }

    this.dialogRef.close(true);
  }
}
