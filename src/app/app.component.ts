import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <!-- header -->
    <app-header></app-header>

    <!-- NOTE routes get injected here -->
    <router-outlet></router-outlet>

    <!-- footer -->
    <app-footer></app-footer>
  `,
  styles: [],
})
export class AppComponent {
  constructor() {}
}
