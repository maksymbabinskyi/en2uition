import { Component, Input } from '@angular/core';

@Component({
  selector: 'e2-accordion-item',
  template: `
    <div class="b-accordion__heading" (click)="active = !active">
      <h3 class="b-accordion__heading-text">{{header}}</h3>
    </div>
    <div class="b-accordion__content">
      <ng-content></ng-content>
    </div>
  `,
  host: {
    class: 'b-accordion__item',
    '[class.b-accordion__item_active]': 'active'
  },
  styles: [':host {display: block}']
})
export class AccordionItemComponent {
  @Input()
  header: any;

  active: boolean;
}
