import { AfterViewInit, Directive, ElementRef } from '@angular/core';
import { ScrollTriggerService } from '../scroll-trigger.service';
import { AppService } from '../../../app.service';

@Directive({
  selector: '[data-scroll]'
})
export class DataScrollDirective implements AfterViewInit {

  constructor(private scrollTriggerService: ScrollTriggerService,
              private appService: AppService,
              private elementRef: ElementRef) {
  }

  ngAfterViewInit(): void {
    if (this.appService.isBrowser()) {
      this.scrollTriggerService.bind(this.elementRef.nativeElement);
    }
  }

}
