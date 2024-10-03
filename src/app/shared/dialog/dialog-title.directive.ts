import { Directive } from '@angular/core';

@Directive({
  selector: '[e2-dialog-title]',
  host: {class: 'e2-dialog__title e2-page_header e2-text_center e2-fw_light e2-h2 pt-5 pb-4'}
})
export class DialogTitleDirective {
}
