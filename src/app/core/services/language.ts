import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  currentLang = 'th';

  constructor(
    private translate: TranslateService,
    @Inject(PLATFORM_ID) private platformId: object
  ) {
    this.translate.setDefaultLang('th');

    // Avoid HTTP translation loading during SSR, which can crash the dev server.
    if (isPlatformBrowser(this.platformId)) {
      this.translate.use('th');
    }
  }

  toggle() {
    this.currentLang = this.currentLang === 'th' ? 'en' : 'th';

    if (isPlatformBrowser(this.platformId)) {
      this.translate.use(this.currentLang);
    }
  }
}