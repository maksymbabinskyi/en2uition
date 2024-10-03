import { Component, ContentChildren, QueryList } from '@angular/core';
import { TabComponent } from './tab.component';

@Component({
  selector: 'e2-tabs',
  template: `
    <mat-tab-group animationDuration="0ms" mat-align-tabs="center" [disableRipple]="true">
      <mat-tab *ngFor="let tab of tabs" [label]="tab.label">
        <ng-template [ngTemplateOutlet]="tab.templateRef"></ng-template>
      </mat-tab>
    </mat-tab-group>
  `,
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent {
  @ContentChildren(TabComponent)
  tabs: QueryList<TabComponent>;
}
