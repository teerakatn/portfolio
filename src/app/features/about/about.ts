import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './about.html',
  styleUrls: ['./about.scss']
})
export class AboutComponent {
  info = [
    { icon: '🎓', label: 'about.info.university.label', value: 'about.info.university.value' },
    { icon: '📚', label: 'about.info.major.label', value: 'about.info.major.value' },
    { icon: '📊', label: 'about.info.GPA.label', value: 'about.info.GPA.value' },
    { icon: '📅', label: 'about.info.duration.label', value: 'about.info.duration.value' },
  ];
}