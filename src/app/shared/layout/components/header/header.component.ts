import { Component, Input } from '@angular/core';

@Component({
  selector: 'e2-header',
  template: `
    <div class="e2-md-container_sm e2-lg-container_sm e2-text_center py-4 py-md-5 mt-lg-4">
      <h1 class="e2-page_header e2-h2 e2-md-h2 e2-fw_light" [innerHTML]="text | safe:'html'"></h1>
      <h2 class="e2-h6 e2-md-h4 e2-color_gray-secondary pt-4" *ngIf="subheader">{{subheader}}</h2>
    </div>
  `
})
export class HeaderComponent {
  @Input() text: string;
  @Input() subheader: string;
}
