import { Injectable } from "@angular/core";
import { PartyService, IdeaService, InitiativeService } from "../services";

declare var SockJS;
declare var Stomp;
@Injectable({
  providedIn: "root",
})
export class MessageService {
  constructor(
    private partyService: PartyService,
    private ideaService: IdeaService,
    private initiativeService: InitiativeService
  ) {}
  public stompClient;
  public msg = [];
  initializeWebSocketConnection() {
    const serverUrl = "http://localhost:8081/socket";
    const ws = new SockJS(serverUrl);
    this.stompClient = Stomp.over(ws);
    const that = this;
    // tslint:disable-next-line:only-arrow-functions
    const partyService = this.partyService;
    const ideaService = this.ideaService;
    const initiativeService = this.initiativeService;

    this.stompClient.connect({}, function (frame) {
      that.stompClient.subscribe("/message", (message) => {
        if (message.body) {
          if (message.body.startsWith("Party")) partyService.getAll();
          that.msg.push(message.body);
          if (message.body.startsWith("Idea")) ideaService.getAll();
          that.msg.push(message.body);
          if (message.body.startsWith("Initiative")) initiativeService.getAll();
          that.msg.push(message.body);
        }
      }); /*
      that.stompClient.subscribe("/user/message", (message) => {
        if (message.body) {
          if (message.body.startsWith("Party")) partyService.getAll();
          that.msg.push(message.body);
        }
      });*/
    });
  }

  sendMessage(message) {
    this.stompClient.send("/app/send/message", {}, message);
  }

  sendAnswer(message) {
    this.stompClient.send("/app/send/answer", {}, message);
  }
}
