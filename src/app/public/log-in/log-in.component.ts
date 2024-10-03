import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../shared/auth/auth.service";
import { NavigationService } from '../../shared/layout/components/navigation/navigation.service';

@Component({
  selector: 'e2-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  form: FormGroup;

  error: string;

  showPassword: boolean;

  constructor(private authService: AuthService,
              private fb: FormBuilder,
              private navigationService: NavigationService) {
    this.form = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
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

    this.navigationService.loading.next(true);
    try {
      await this.authService.signin(formValue.email, formValue.password);
    } catch (e) {
      this.error = e && e.error && e.error.errorMsg;
    }
    this.navigationService.loading.next(false);
  }
}
