import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NavbarComponent } from './shared/components/navbar/navbar';
import { HeroComponent } from './features/hero/hero';
import { AboutComponent } from './features/about/about';
import { SkillsComponent } from './features/skills/skills';
import { PortfolioComponent } from './features/projects/projects';
import { ContactComponent } from './features/contact/contact';
import * as AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, HeroComponent, AboutComponent, SkillsComponent, PortfolioComponent, ContactComponent],
  template: `
    <app-navbar />
    <main class="page-content">
      <app-hero />
      <app-about />
      <app-skills />
      <app-portfolio />
      <app-contact />
    </main>
  `
})
export class AppComponent implements OnInit {
  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init({ duration: 800, once: true });
    }
  }
}