import {Component, AfterViewInit, ElementRef, HostListener, Renderer2} from '@angular/core';

@Component({
  selector: 'e2-carousel',
  template: `
    <div class="nav flex-shrink-0 d-flex justify-content-center align-items-center carousel-left-nav-arrow">
      <div class="icon-chevron e2-icon_size-14 e2-rotate_90 carousel-left-nav-arrow"></div>
    </div>
    <e2-carousel-content>
      <ng-content></ng-content>
    </e2-carousel-content>
    <div class="nav flex-shrink-0 d-flex justify-content-center align-items-center carousel-right-nav-arrow">
      <div class="icon-chevron e2-icon_size-14 e2-rotate_270 carousel-right-nav-arrow"></div>
    </div>

    <div class="dots d-flex justify-content-center pt-5">

    </div>
  `,
  styleUrls: ['./carousel.component.scss'],
  host: {class: 'e2-assessment_select mb-5 d-flex'}
})
export class CarouselComponent implements AfterViewInit {
  rootElement: ElementRef;
  prevDots: ElementRef;
  step: number;
  totalDots: number;
  selectedDot = 0;

  constructor(private elementRef: ElementRef,  private renderer: Renderer2) {
    this.rootElement = elementRef;
  }

  ngAfterViewInit() {
    const hostElem = this.rootElement.nativeElement;
    hostElem.children[1].scrollLeft = 0;
    this.totalDots = window.innerWidth < 768 ? 12 : 6;
    this.step = this.totalDots === 6 ? 49.3 : window.innerWidth / 21;

    this.dotsGenerator(this.totalDots, hostElem.children[3]);
    this.renderer.addClass(hostElem.children[3].children[0], 'active');
    this.prevDots = hostElem.children[3].children[0];
  }

  dotsGenerator(num: number, appendTo: ElementRef) {
    for (let i = 0; i < num; i++) {
      const dot = this.renderer.createElement('div');
      this.renderer.addClass(dot, `dot-${i}`);
      this.renderer.addClass(dot, `dot`);
      this.renderer.appendChild(appendTo, dot);
    }
  }

  @HostListener('click', ['$event'])
  private handleHorizontalNavigation = (event) => {
    if (event.target.className.includes('carousel-right-nav-arrow')) {
      this.elementRef.nativeElement.children[1].scrollLeft += (this.step * 15);
      if (this.selectedDot < (this.totalDots - 1)) {
        this.selectedDot++;
        this.selectDot(this.rootElement.nativeElement.children[3].children[this.selectedDot])
      }
    } else if (event.target.className.includes('carousel-left-nav-arrow')) {
      this.elementRef.nativeElement.children[1].scrollLeft += (-(this.step) * 15);

      if (this.selectedDot > 0) {
        this.selectedDot--;
        this.selectDot(this.rootElement.nativeElement.children[3].children[this.selectedDot])
      }
    }

    if (event.target.className.includes('dot-')) {
      if (this.prevDots) {
        this.renderer.removeClass(this.prevDots, 'active');
      }
      this.renderer.addClass(event.target, 'active');
      const dot = parseInt(event.target.className.replace('dot-', '').replace('dot', '').replace(' ', '').replace('active', ''), 10);
      this.elementRef.nativeElement.children[1].scrollLeft = 0;
      this.elementRef.nativeElement.children[1].scrollLeft = ((this.step * 15) * dot);
      this.selectedDot = dot;
      this.prevDots = event.target;
    }
  };

  selectDot(selectedDot) {
    if (this.prevDots) {
      this.renderer.removeClass(this.prevDots, 'active');
    }
    this.renderer.addClass(selectedDot, 'active');
    this.prevDots = selectedDot;
  }

}
