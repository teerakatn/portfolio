import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, DOCUMENT, ViewportScroller, isPlatformBrowser } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../../../core/services/language';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss']
})
export class NavbarComponent {
  isScrolled = false;
  isMenuOpen = false;
  activeSection = 'hero';
  private readonly sectionIds = ['hero', 'about', 'skills', 'portfolio', 'contact'];
  private readonly navOffset = 88;

  constructor(
    public langService: LanguageService,
    private viewportScroller: ViewportScroller,
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: object
  ) {
    this.viewportScroller.setOffset(() => [0, this.navOffset]);
  }

  ngOnInit() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const hash = this.document.defaultView?.location.hash ?? '';
    const targetId = hash.replace('#/', '').replace('#', '');
    if (targetId && this.sectionIds.includes(targetId)) {
      setTimeout(() => this.scrollToSection(targetId), 0);
    }
  }

  @HostListener('window:scroll')
  onScroll() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const scrollY = this.document.defaultView?.scrollY ?? 0;
    this.isScrolled = scrollY > 40;
    this.updateActiveSection(scrollY);
  }

  @HostListener('window:resize')
  onResize() {
    const width = this.document.defaultView?.innerWidth ?? 0;
    if (width > 767 && this.isMenuOpen) {
      this.isMenuOpen = false;
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  scrollToSection(sectionId: string, event?: Event) {
    event?.preventDefault();
    this.isMenuOpen = false;
    this.activeSection = sectionId;
    this.viewportScroller.scrollToAnchor(sectionId);
  }

  private updateActiveSection(scrollY: number) {
    const currentPosition = scrollY + this.navOffset + 12;
    for (let index = this.sectionIds.length - 1; index >= 0; index--) {
      const sectionId = this.sectionIds[index];
      const section = this.document.getElementById(sectionId);
      if (section && section.offsetTop <= currentPosition) {
        this.activeSection = sectionId;
        return;
      }
    }

    this.activeSection = 'hero';
  }
}