import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-contact",
  template: `
    <section class="hero is-primary is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Contact Us</h1>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <form (ngSubmit)="submitForm()" #contactForm="ngForm">
          <div class="field">
            <label class="label">Name</label>
            <input
              type="text"
              name="name"
              class="input"
              [(ngModel)]="name"
              #nameInput="ngModel"
              required
            />
          </div>
          <div
            class="help is-error"
            *ngIf="nameInput.invalid && nameInput.touched"
          >
            Your name is required.
          </div>

          <div class="field">
            <label class="label">Email</label>
            <input
              type="email"
              name="email"
              class="input"
              [(ngModel)]="email"
              required
              email
              [(ngModel)]="email"
              #emailInput="ngModel"
            />
          </div>

          <div
            class="help is-error"
            *ngIf="emailInput.invalid && emailInput.touched"
          >
            Your email is required and needs to be a valid email.
          </div>

          <div class="field">
            <label class="label">Your Message</label>
            <textarea
              name="message"
              class="textarea"
              [(ngModel)]="message"
            ></textarea>
          </div>

          <button
            type="submit"
            class="button is-large is-warning"
            [disabled]="contactForm.invalid"
          >
            Send!
          </button>
        </form>
      </div>
    </section>
  `,
  styles: [],
})
export class ContactComponent implements OnInit {
  name: string;
  email: string;
  message: string;
  constructor() {}

  ngOnInit(): void {}

  submitForm() {
    const message = `My name is ${this.name}. My email is ${this.email}. My message is ${this.message}.`;
    alert(message);
  }
}
