import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { AuthService } from '../../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'e2-log-in-dialog',
  templateUrl: './log-in-dialog.component.html',
  styleUrls: ['./log-in-dialog.component.scss']
})
export class LogInDialogComponent implements OnInit {

  form: FormGroup;

  error: string;

  showPassword: boolean;

  constructor(public dialogRef: MatDialogRef<any>, private authService: AuthService, private fb: FormBuilder) {
    this.form = this.fb.group({
      email: ['', Validators.email],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  async signin() {
    if (this.form.invalid) {
      return;
    }

    const formValue = this.form.value;

    try {
      await this.authService.signin(formValue.email, formValue.password);
      this.close();
    } catch (e) {
      this.error = e && e.error && e.error.errorMsg;
    }
  }

  close() {
    this.dialogRef.close();
  }
}
