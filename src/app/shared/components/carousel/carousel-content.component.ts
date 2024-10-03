import { Component, ElementRef, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'e2-carousel-content',
  template: `
    <ng-content></ng-content>
  `,
  host: {
    class: 'content e2-md-h7 e2-color_accent e2-text_center d-flex'
  }
})
export class CarouselContentComponent implements OnInit {

  constructor(private elementRef: ElementRef) {
  }

  ngOnInit() {
  }

  @HostListener('wheel', ['$event'])
  private handleHorizontalScroll = (event) => {
    event.preventDefault();

    this.elementRef.nativeElement.scrollLeft += (event.deltaY * 15);
  };

}
