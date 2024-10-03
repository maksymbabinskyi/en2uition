import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { AuthService } from '../../auth/auth.service';
import { UsersApiService } from '../../api/users-api.service';

@Component({
  selector: 'e2-change-password-dialog',
  templateUrl: './change-password-dialog.component.html',
  styleUrls: ['./change-password-dialog.component.scss']
})
export class ChangePasswordDialogComponent implements OnInit {
  form: FormGroup;
  showCurrentPassword;
  showNewPassword;
  showConfirmPassword;

  constructor(private fb: FormBuilder,
    public dialogRef: MatDialogRef<ChangePasswordDialogComponent>,
    private authService: AuthService,
    private usersService: UsersApiService) { }

  ngOnInit() {
    this.form = this.fb.group({
      currentPassword: ['', Validators.required],
      newPassword: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }

  async changePassword() {
    if (this.form.invalid || this.form.value.newPassword !== this.form.value.confirmPassword) {
      return;
    }
    await this.usersService.changePassword({
      userName: this.authService.getUser().email,
      ...this.form.value
    }).toPromise();
    this.dialogRef.close('success');
  }
}
