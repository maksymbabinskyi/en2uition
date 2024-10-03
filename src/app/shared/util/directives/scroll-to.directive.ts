import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[scroll-to]'
})
export class ScrollToDirective {

  @Input('scroll-to')
  elementSelector: string;

  constructor() {
  }

  @HostListener('click', ['$event'])
  onClick() {
    const offset = document.querySelector(this.elementSelector).getBoundingClientRect().top + window.scrollY;

    window.scroll({top: offset, behavior: 'smooth'});
  }
}
