import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'e2-carousel-item',
  template: `
    <ng-content></ng-content>
  `,
  host: {class: 'area d-flex justify-content-center align-items-center e2-bg_white'}
})
export class CarouselItemComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
