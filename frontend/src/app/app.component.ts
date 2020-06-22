import { Component } from "@angular/core";
import { MessageService } from "./services/message.service";
@Component({
  selector: "app-root",
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>

    <!--input
      class="form-control"
      type="text"
      placeholder="message"
      [(ngModel)]="input"
    />
    <button class="btn btn-success" (click)="sendMessage()">Send</button>
    <div-- class="content">
      <div *ngFor="let msg of messageService.msg">
        {{ msg }}
      </div>
    </div-->
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
}
