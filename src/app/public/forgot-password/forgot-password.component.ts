import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsersApiService } from '../../shared/api/users-api.service';
import { NavigationService } from '../../shared/layout/components/navigation/navigation.service';

@Component({
  selector: 'e2-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  forgotForm: FormGroup;
  message;
  messageType = 'success';

  constructor(private fb: FormBuilder,
    private usersService: UsersApiService,
    private navigationService: NavigationService
    ) { }

  ngOnInit() {
    this.forgotForm = this.fb.group({
      userName: ['', Validators.required]
    });
  }

  async forgot() {
    if (this.forgotForm.invalid) {
      return;
    }
    this.navigationService.loading.next(true);
    const res = await this.usersService.forgotPassword(this.forgotForm.value).toPromise();
    if (res) {
      this.message = 'Please check your email!';
    }
    this.navigationService.loading.next(false);
  }
}
