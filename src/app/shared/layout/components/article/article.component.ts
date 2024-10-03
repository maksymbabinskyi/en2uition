import { Component, Input } from '@angular/core';

@Component({
  selector: 'e2-article',
  template: `
    <article>
      <a [routerLink]="articleLinkUrl" class="e2-link d-block e2-fw_semibold e2-h5 e2-lg-h4 mb-2 mb-md-4" [innerHTML]="articleLinkText | safe:'html'"></a>
      <p class="e2-h7 e2-lg-h7">{{articleText}}</p>
    </article>
  `,
  host: {class: 'e2-text_article mb-4'}
})

export class ArticleComponent {
  @Input() articleLinkUrl: string;
  @Input() articleLinkText: string;
  @Input() articleText: string;
}
