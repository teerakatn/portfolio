import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.scss']
})
export class PortfolioComponent {
  projects = [
    {
      title: 'Portfolio Website',
      description: 'เว็บไซต์ Portfolio ส่วนตัว สร้างด้วย Angular + Material',
      tags: ['Angular', 'TypeScript', 'SCSS'],
      icon: '🌐',
      link: '#'
    },
    {
      title: 'ระบบเเจ้งซ่อมอุปกรณ์ในองค์กร',
      description: 'ระบบแจ้งซ่อมแบบ full stack ที่มี workflow ชัดเจนตั้งแต่เปิดงาน, มอบหมายช่าง, ซ่อม, รอตรวจรับ, ไปจนปิดงาน',
      tags: ['Node.js', 'React', 'NeonDB'],
      icon: '📋',
      link: 'https://maintenance-request-system.onrender.com/'
    },
    {
      title: 'Angular Workshop',
      description: 'ฝึกใช้งาน Angular หลายหัวข้อในโปรเจกต์เดียว เช่น Routing, Template-driven Form, Reactive Form, Signal, API GET/POST และการจัดการ Error กลางทั้งระบบ',
      tags: ['Angular', 'RxJS', 'REST API'],
      icon: '📊',
      link: 'https://angular-hjdw.vercel.app/'
    },
  ];
}