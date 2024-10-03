import { Component, Input } from '@angular/core';

// TODO:
// to the listItem4 should be added two classes "pb-3 pb-sm-4" on "listItem5 = true"

@Component({
  selector: 'e2-page-description',
  template: `
    <div class="e2-md-container_sm e2-lg-container_sm">
      <div class="e2-pageDescription e2-lg-h6 pb-3 pb-md-5">
        <ul class="e2-list-type_disc" *ngIf="listItem1">
          <li class="pb-3 pb-sm-4">
            <p [innerHTML]="listItem1 | safe:'html'" route-transformer></p>
          </li>
          <li class="pb-3 pb-sm-4">
            <p [innerHTML]="listItem2 | safe:'html'" route-transformer></p>
          </li>
          <li class="pb-3 pb-sm-4">
            <p [innerHTML]="listItem3 | safe:'html'" route-transformer></p>
          </li>
          <li [class.pb-3]="listItem5" *ngIf="listItem4">
          <!-- <li [class.pb-3 pb-sm-4]="listItem5" *ngIf="listItem4"> -->
            <p [innerHTML]="listItem4 | safe:'html'" route-transformer></p>
          </li>
          <li class="pl-2" *ngIf="listItem5">
            <p [innerHTML]="listItem5 | safe:'html'" route-transformer></p>
          </li>
        </ul>

        <p [class.e2-text_center]="textCenter" *ngIf="!listItem1" [innerHTML]="desc | safe:'html'"></p>
      </div>
    </div>
  `
})
export class PageDescriptionComponent {
  @Input() listItem1: string;
  @Input() listItem2: string;
  @Input() listItem3: string;
  @Input() listItem4: string;
  @Input() listItem5: string;
  @Input() desc: string;
  @Input() textCenter: boolean;
}
