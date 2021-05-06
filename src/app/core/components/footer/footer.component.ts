import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-footer",
  template: `
    <footer class="footer">
      <div class="container content has-text-centered">
        <p>Made with 💖 by Daniel</p>
      </div>
    </footer>
  `,
  styles: [
    `
      footer {
        background-color: black;
        color: white;
        height: 10vh;
      }
    `,
  ],
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
