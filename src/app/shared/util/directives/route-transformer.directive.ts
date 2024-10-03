import { Directive, ElementRef, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Directive({
  selector: '[route-transformer]'
})
export class RouteTransformerDirective {

  constructor(private el: ElementRef, private router: Router, private route: ActivatedRoute) {
  }

  @HostListener('click', ['$event'])
  public navigate(event) {
    if (event.target.tagName === 'A') {
      this.router.navigate([event.target.getAttribute('href')], {relativeTo: this.route});
      event.preventDefault();
    } else {
      return;
    }
  }
}
