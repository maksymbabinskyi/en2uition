import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'e2-footer',
  template: `
    <div class="b-footer">
      <div class="-ol-container -ol-container_lg">
        <div class="b-footer__inner">
          <div class="b-footer__row">
            <div class="b-footer__row-item">
              <img src="assets/images/icons/logo.svg" alt="Logo" class="b-footer__logo">
              <p class="b-footer__text">{{'footer_description' | translate}}</p>
            </div>
            <div class="b-footer__row-item b-footer__row-item_major">
              <div class="b-footer__navs">
                <div class="b-footer__navs-item">
                  <div class="b-footer__nav">
                    <div class="b-footer__nav-inner">
                      <div class="b-footer__nav-item">
                        <a routerLink="/how-it-works" class="b-footer__nav-link">{{'How it works' | translate}}</a>
                      </div>
                      <div class="b-footer__nav-item">
                        <a href="#" class="b-footer__nav-link">{{'Pricing' | translate}}</a>
                      </div>
                      <div class="b-footer__nav-item">
                        <a routerLink="/faq" class="b-footer__nav-link">{{'FAQ' | translate}}</a>
                      </div>
                      <div class="b-footer__nav-item">
                        <a routerLink="/about-us" class="b-footer__nav-link">{{'About Us' | translate}}</a>
                      </div>
                      <div class="b-footer__nav-item">
                        <a routerLink="/contact-us" class="b-footer__nav-link">{{'Contact Us' | translate}}</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="b-footer__navs-item _only_tb">
                  <div class="b-footer__nav-minor _only_tb">
                    <div class="b-footer__nav-minor-inner">
                      <div class="b-footer__nav-minor-item">
                        <a routerLink="/faq" class="b-footer__text-minor b-footer__text-minor_link">{{'Terms & Conditions' | translate}}</a>
                      </div>
                      <div class="b-footer__nav-minor-item">
                        <a routerLink="/faq" class="b-footer__text-minor b-footer__text-minor_link">{{'Privacy Policy' | translate}}</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="b-footer__row b-footer__row_last">
            <div class="b-footer__row-item">
              <p class="b-footer__statistics"><span class="b-footer__statistics_highlight _letter_spacing_inherit">106,273,656</span> {{'tests taken so far' | translate}}</p>
            </div>
            <div class="b-footer__row-item">
              <p class="b-footer__text-minor _only_tb">© 2018 en2uition</p>
              <div class="b-footer__nav-minor _none_tb">
                <div class="b-footer__nav-minor-inner">
                  <div class="b-footer__nav-minor-item">
                    <p class="b-footer__text-minor">© 2018 en2uition</p>
                  </div>
                  <div class="b-footer__nav-minor-item">
                    <a routerLink="/faq" class="b-footer__text-minor b-footer__text-minor_link">{{'Terms & Conditions' | translate}}</a>
                  </div>
                  <div class="b-footer__nav-minor-item">
                    <a routerLink="/faq" class="b-footer__text-minor b-footer__text-minor_link">{{'Privacy Policy' | translate}}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class FooterComponent {
  langCode = 'en';

  constructor(private translateService: TranslateService) {
    this.translateService.setDefaultLang('en');
    this.translateService.use('en');
  }

  changeLang(flag) {
    this.langCode = flag;
    this.translateService.use(this.langCode);
  }
}
