import { Directive, OnDestroy, TemplateRef, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs';
import { AuthService } from './auth.service';
import { takeUntil } from 'rxjs/operators';

enum LoginTrigger {
  LOGGED_IN,
  NOT_LOGGED_IN
}

export class IfLoggedOrNotBase implements OnDestroy {
  private rendered: boolean;

  private unsubscribe$ = new Subject();

  constructor(private loginTrigger: LoginTrigger,
              private authService: AuthService,
              private templateRef: TemplateRef<any>,
              private viewContainerRef: ViewContainerRef) {
    this.authService.getUser$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(user => {
        if (loginTrigger === LoginTrigger.LOGGED_IN) {
          user ? this.render() : this.clear();
        } else {
          user ? this.clear() : this.render();
        }
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  private render() {
    if (this.rendered) {
      return;
    }

    this.viewContainerRef.createEmbeddedView(this.templateRef);
    this.rendered = true;
  }

  private clear() {
    if (!this.rendered) {
      return;
    }

    this.viewContainerRef.clear();
    this.rendered = false;
  }
}

@Directive({
  selector: '[e2IfLoggedIn]'
})
export class IfLoggedInDirective extends IfLoggedOrNotBase {
  constructor(authService: AuthService, templateRef: TemplateRef<any>, viewContainerRef: ViewContainerRef) {
    super(LoginTrigger.LOGGED_IN, authService, templateRef, viewContainerRef);
  }
}

@Directive({
  selector: '[e2IfNotLoggedIn]'
})
export class IfNotLoggedInDirective extends IfLoggedOrNotBase {
  constructor(authService: AuthService, templateRef: TemplateRef<any>, viewContainerRef: ViewContainerRef) {
    super(LoginTrigger.NOT_LOGGED_IN, authService, templateRef, viewContainerRef);
  }
}
