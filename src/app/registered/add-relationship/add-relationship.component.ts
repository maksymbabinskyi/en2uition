import { Component, OnInit } from '@angular/core';
import { RelationshipsApiService } from '../../shared/api/relationships-api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ImagesApiService, ImageType } from '../../shared/api/images-api.service';
import { AuthService } from '../../shared/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'e2-add-relationship',
  templateUrl: './add-relationship.component.html',
  styleUrls: ['./add-relationship.component.scss']
})
export class AddRelationshipComponent implements OnInit {

  previewURL: string;
  form: FormGroup;

  private photo: File;

  constructor(private fb: FormBuilder,
              private relationshipsApiService: RelationshipsApiService,
              private imagesApiService: ImagesApiService,
              private authService: AuthService,
              private router: Router) {
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

    if (relationship) {
      this.router.navigate(['relationships']);
    }
  }
}
