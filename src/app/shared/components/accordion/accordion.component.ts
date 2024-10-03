import { Component } from '@angular/core';

@Component({
  selector: 'e2-accordion',
  template: `
    <ng-content></ng-content>
  `,
  styleUrls: ['./accordion.component.scss'],
  host: {class: 'b-accordion'}
})
export class AccordionComponent {
}
