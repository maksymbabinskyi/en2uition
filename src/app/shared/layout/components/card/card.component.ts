import { Component, Input } from '@angular/core';

import { v4 as uuid } from 'uuid';

// TODO:
// Generate unique ID for the input [id] and label [for] attributes (check template file)

@Component({
  selector: 'e2-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  host: {class: 'e2-card_item'}
})
export class CardComponent {

  id = uuid();

  @Input() current: boolean;
  @Input() imageUrl: string;
  @Input() header: string;
  @Input() subheader: string;
  @Input() buttonText: string;
  @Input() questions: { [name: string]: string };
  @Input() description: string;
  @Input() tags: string;
}
