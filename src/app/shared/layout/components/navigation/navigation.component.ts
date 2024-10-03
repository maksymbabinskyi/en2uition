import { Component, OnInit } from '@angular/core';
import { DialogService } from '../../../dialog/dialog.service';
import { LogInDialogComponent } from '../../../auth/dialogs';
import { NavigationStart, Router, RouterEvent } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AuthService } from '../../../auth/auth.service';
import { NavigationService } from './navigation.service';
import { TranslateService } from '@ngx-translate/core';

// TODO:
// 1. Display a mobile navigation and a navigation mask on the .mobile-nav_button click;
// 2. Take from my code a dropdown for a registered area;

@Component({
  selector: 'e2-navigation',
  templateUrl: './navigation.component.html',
  providers: [DialogService]
})
export class NavigationComponent implements OnInit {

  navOpened = false;
  loading = false;
  langCode = 'en';
  isLangOpened = false;
  profile;

  constructor(private dialogService: DialogService,
              private router: Router,
              private authService: AuthService,
              public navigationService: NavigationService,
              private translateService: TranslateService) {
    this.router.events
      .pipe(filter((event: RouterEvent) => event instanceof NavigationStart))
      .subscribe(() => {

        setTimeout(() => {
          this.navOpened = false;
        });
      });

    this.navigationService.loading.subscribe(loading => {
      this.loading = loading;
    });
    this.translateService.use(this.langCode);
  }

  async ngOnInit() {
    this.profile = this.authService.getUser() && this.authService.getUser().profile;
  }

  logout() {
    this.authService.logout();
  }

  getUser() {
    return this.authService.getUser();
  }

  navigate(routes: string[]) {
    this.router.navigate(routes);
  }

  dropdownNavigate(routes: string[]) {
    this.navigate(routes);
    this.navOpened = false;
  }

  changeLang(code) {
    this.langCode = code;
    this.translateService.use(this.langCode);
  }
}
