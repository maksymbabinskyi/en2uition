import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { ProfilesApiService } from '../../api/profiles-api.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'e2-change-name-dialog',
  templateUrl: './change-name-dialog.component.html',
  styleUrls: ['./change-name-dialog.component.scss']
})
export class ChangeNameDialogComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder,
    public dialogRef: MatDialogRef<ChangeNameDialogComponent>,
    private profileService: ProfilesApiService,
    private authService: AuthService) { }

  ngOnInit() {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: [''],
    });
  }

  async changeName() {
    const profile = this.authService.getUser().profile;
    if (this.form.invalid) {
      return;
    }
    profile['name'] = this.form.value.firstName + ' ' + this.form.value.lastName;
    await this.profileService.put(profile).toPromise();
    this.dialogRef.close('success');
  }
}
