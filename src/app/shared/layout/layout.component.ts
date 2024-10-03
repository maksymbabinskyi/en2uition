import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'e2-layout',
  template: `
    <e2-navigation></e2-navigation>
    <div class="l-content-wrapper__item_stretch l-content-wrapper__item"><router-outlet></router-outlet></div>
    <e2-footer class="l-content-wrapper__item l-content-wrapper__item_major" *ngIf="!hideFooter"></e2-footer>
  `,
  host: {'[class.l-content-wrapper]': 'true'}
})
export class LayoutComponent {

  hideFooter: boolean;

  constructor(private route: ActivatedRoute) {
    const routeData = route.snapshot.data;

    this.hideFooter = routeData.hideFooter;
  }
}

