import { Component, OnInit } from '@angular/core';
import { DialogService } from '../../shared/dialog/dialog.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../shared/auth/auth.service';
import { NavigationService } from '../../shared/layout/components/navigation/navigation.service';

@Component({
  selector: 'e2-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  providers: [DialogService]
})
export class SignUpComponent implements OnInit {

  form: FormGroup;

  errors: any = [];

  loading: boolean;

  showPassword: boolean;
  showConfirmPassword: boolean;
  isSubmitted = false;

  constructor(private authService: AuthService,
              private fb: FormBuilder,
              private navigationService: NavigationService) {
    this.form = this.fb.group({
      email: ['', Validators.email],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.isSubmitted = false;
  }

  async signup() {
    if (this.form.invalid || this.form.value.password !== this.form.value.confirmPassword) {
      this.errors[0] = {description: 'Email is not correct or password doesn\'t match.'};
      return;
    }

    const formValue = this.form.value;
    this.navigationService.loading.next(true);
    try {
      await this.authService.signup(formValue.email, formValue.password);
      this.isSubmitted = true;
    } catch (e) {
      if (e && e.error && e.error.errors) {
        this.errors = e && e.error && e.error.errors;
      } else if (e && e.error && !e.error.errors) {
        this.errors[0] = {description: e && e.error};
      }
    }
    this.navigationService.loading.next(false);
  }
}
