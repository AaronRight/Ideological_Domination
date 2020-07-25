import { Component } from "@angular/core";
import { MessageService } from "./services";
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
  input;
  constructor(private messageService: MessageService) {}
  sendMessage() {
    if (this.input) {
      this.messageService.sendMessage(this.input);
      this.input = "";
    }
  }
  sendAnswer() {
    if (this.input) {
      this.messageService.sendAnswer(this.input);
      this.input = "";
    }
  }
}
