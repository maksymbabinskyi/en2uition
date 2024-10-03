import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../shared/auth/auth.service';
import { NavigationService } from '../../shared/layout/components/navigation/navigation.service';

@Component({
  selector: 'e2-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.scss']
})
export class VerifyComponent implements OnInit {
  message = '';

  constructor(private route: ActivatedRoute,
    private authService: AuthService,
    private navigationService: NavigationService) {
    route.params.subscribe(params => {
      this.navigationService.loading.next(true);
      authService.verify(params.id).subscribe(res => {
        if (res.verified) {
          this.message = 'Your account is verified successfully!'
        }
        this.navigationService.loading.next(false);
      }, err => {
        this.message = err.error;
        this.navigationService.loading.next(false);
      });
    });
  }

  ngOnInit() {
  }

}
