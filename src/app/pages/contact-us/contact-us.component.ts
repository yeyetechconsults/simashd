import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  contactForm: FormGroup;
  isSending = false;
  isSent = false;
  isError = false;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.invalid) {
      return;
    }

    this.isSending = true;
    this.isSent = false;
    this.isError = false;

    this.http.post('http://localhost:3000/send-email', this.contactForm.value)
      .subscribe({
        next: () => {
          this.isSending = false;
          this.isSent = true;
          this.contactForm.reset();
        },
        error: () => {
          this.isSending = false;
          this.isError = true;
        }
      });
  }
}