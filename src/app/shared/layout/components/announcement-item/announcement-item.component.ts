import { Component, Input } from '@angular/core';

@Component({
  selector: 'e2-announcement-item',
  templateUrl: './announcemenent-item.component.html',
  styleUrls: ['./announcemenent-item.component.scss']
})
export class AnnouncementItemComponent {

  @Input() customClass: string;

  @Input() rowReverse: boolean;
  @Input() nomargin: boolean;
  @Input() fullScreenMD: boolean;

  @Input() panelHeader: string;
  @Input() panelText: string;
  @Input() panelLinkUrl: string;
  @Input() panelLink: string;
  @Input() panelImgUrl: string;

  @Input() repeatAnnouncementHeader: string;
  @Input() contentHeaderWithDash: string;
  @Input() repeatAnnouncementHeaderText: string;

  @Input() contentHeader: string;
  @Input() contentText: string;
  @Input() contentText2: string;
  @Input() contentList: boolean;
  @Input() contentLinkUrl: string;
  @Input() contentLink: string;

  @Input() contentListText1: string;
  @Input() contentListLinkUrl1: string;
  @Input() contentListLink1: string;

  @Input() contentListText2: string;
  @Input() contentListLinkUrl2: string;
  @Input() contentListLink2: string;

  @Input() contentListText3: string;
  @Input() contentListLinkUrl3: string;
  @Input() contentListLink3: string;

  @Input() contentListText4: string;
  @Input() contentListLinkUrl4: string;
  @Input() contentListLink4: string;

  @Input() contentHeaderLinkUrl: string;
  @Input() contentHeaderLink: string;
  @Input() contentTextWhen: string;
  @Input() contentTextDetails: string;
  @Input() contentTextObjective: string;
  @Input() contentImgUrl: string;
  @Input() contentImgClasses: string;
}
