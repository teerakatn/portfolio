import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './skills.html',
  styleUrls: ['./skills.scss']
})
export class SkillsComponent {
  skillGroups = [
    {
      category: 'Frontend',
      icon: '🎨',
      skills: ['Angular', 'HTML', 'CSS', 'javaScript']
    },
    {
      category: 'Backend',
      icon: '⚙️',
      skills: ['Node.js']
    },
    {
      category: 'Tools',
      icon: '🛠️',
      skills: ['Git', 'VS Code', 'GitHub', 'Postman']
    },
  ];
}