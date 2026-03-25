import { Component } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './hero.html',
  styleUrls: ['./hero.scss']
})
export class HeroComponent {
  constructor(private viewportScroller: ViewportScroller) {
    this.viewportScroller.setOffset(() => [0, 88]);
  }

  scrollToSection(event: Event, sectionId: string) {
    event.preventDefault();
    this.viewportScroller.scrollToAnchor(sectionId);
  }
}