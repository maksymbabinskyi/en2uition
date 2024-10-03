import { Component, Input } from '@angular/core';

@Component({
  selector: 'e2-cta',
  templateUrl: './cta.component.html',
  styleUrls: ['./cta.component.scss']
})
export class CtaComponent {
  @Input() hiddenArea: boolean;
  @Input() reverse: boolean;
  @Input() header: string;
  @Input() text: string;
  @Input() buttonText: string;
  @Input() link: any;
  @Input() flexWrap: boolean;
}
