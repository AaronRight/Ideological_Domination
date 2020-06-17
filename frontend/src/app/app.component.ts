import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
  `,
  styles: [":host{ display: flex; flex: 1; flex-direction: column}"],
})
export class AppComponent {
  title = "frontend";
}
