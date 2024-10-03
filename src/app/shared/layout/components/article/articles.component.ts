import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'e2-articles',
  template: `
    <div class="e2-md-container_sm e2-lg-container_sm">
      <hr class="horizontal">
      <div class="d-md-flex flex-grow-1 justify-content-between flex-wrap pt-5">
        <ng-content></ng-content>
      </div>
      <div class="e2-separator"></div>
    </div>
  `
})

export class ArticlesComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
