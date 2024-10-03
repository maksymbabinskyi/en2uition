import { Injectable } from '@angular/core';
import { AppService } from '../../app.service';

import * as ScrollTrigger from 'scrolltrigger-classes/ScrollTrigger';

@Injectable({
  providedIn: 'root'
})
export class ScrollTriggerService {

  private trigger;

  constructor(private appService: AppService) {
    if (this.appService.isBrowser()) {
      this.trigger = new ScrollTrigger({once: true});
    }
  }

  bind(element) {
    if (!this.appService.isBrowser()) {
      return;
    }

    this.trigger.bind(element);
    this.trigger.scrollDidChange();
  }
}
