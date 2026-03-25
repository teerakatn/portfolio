import { Component, OnInit } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import emailjs from '@emailjs/browser';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TranslateModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss']
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  loading = false;
  status: 'success' | 'error' | null = null;

  constructor(
    private fb: FormBuilder,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit() {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  get f() { return this.contactForm.controls; }

  private getRuntimeConfig(metaName: string): string {
    const value = this.document.querySelector(`meta[name="${metaName}"]`)?.getAttribute('content');
    return value?.trim() ?? '';
  }

  async onSubmit() {
    if (this.contactForm.invalid) return;

    const serviceId = this.getRuntimeConfig('emailjs-service-id');
    const templateId = this.getRuntimeConfig('emailjs-template-id');
    const publicKey = this.getRuntimeConfig('emailjs-public-key');

    if (!serviceId || !templateId || !publicKey) {
      console.error('Missing EmailJS runtime configuration.');
      this.status = 'error';
      return;
    }

    this.loading = true;
    this.status = null;
    try {
      await emailjs.send(
        serviceId, templateId,
        {
          from_name: this.f['name'].value,
          from_email: this.f['email'].value,
          message: this.f['message'].value,
        },
        publicKey
      );
      this.status = 'success';
      this.contactForm.reset();
    } catch {
      this.status = 'error';
    } finally {
      this.loading = false;
    }
  }
}