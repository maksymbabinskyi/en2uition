import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavigationService } from '../../shared/layout/components/navigation/navigation.service';
import { UsersApiService } from '../../shared/api/users-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'e2-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  resetForm: FormGroup;
  showNewPassword = false;
  showConfirmPassword = false;
  message;
  messageType = 'success';
  userId = '';

  constructor(private fb: FormBuilder,
    private navigationService: NavigationService,
    private usersService: UsersApiService,
    private router: ActivatedRoute) { }

  ngOnInit() {
    this.resetForm = this.fb.group({
      newPassword: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
    this.router.params.subscribe(res => {
      this.userId = res.id;
    });
  }

  async reset() {
    if (this.resetForm.invalid) {
      return;
    }
    this.navigationService.loading.next(true);
    const res = await this.usersService.resetPassword(this.userId, this.resetForm.value).toPromise();
    if (res && res.statusCode === 'OK') {
      this.message = 'Password has been changed successfully. Please go to login.';
    }
    this.navigationService.loading.next(false);
  }
}
