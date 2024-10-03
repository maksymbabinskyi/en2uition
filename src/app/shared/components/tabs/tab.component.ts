import { Component, Input, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'e2-tab',
  template: `
    <ng-template #template>
      <ng-content></ng-content>
    </ng-template>
  `
})
export class TabComponent {
  @Input()
  label: string;

  @ViewChild(TemplateRef)
  templateRef: TemplateRef<any>;
}
