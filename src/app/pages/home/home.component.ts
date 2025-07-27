import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  verificationForm: FormGroup;
  isSending = false;
  isSent = false;
  isError = false;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.verificationForm = this.fb.group({
      companyName: ['', Validators.required],
      contactEmail: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      certificateType: ['', Validators.required],
      messageTrust: ['', Validators.required]
    });
  }

  onVerifySubmit() {
    if (this.verificationForm.invalid) {
      return;
    }

    this.isSending = true;
    this.isSent = false;
    this.isError = false;

    this.http.post('http://localhost:3000/send-verification-email', this.verificationForm.value)
      .subscribe({
        next: () => {
          this.isSending = false;
          this.isSent = true;
          this.verificationForm.reset();
        },
        error: () => {
          this.isSending = false;
          this.isError = true;
        }
      });
  }
}
