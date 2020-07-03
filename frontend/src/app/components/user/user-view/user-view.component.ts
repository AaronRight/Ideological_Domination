import { Component, OnInit } from "@angular/core";
import { UserService } from "../../../services/user.service";

@Component({
  selector: "user-view",
  templateUrl: "./user-view.component.html",
  styleUrls: ["./user-view.component.css"],
})
export class UserViewComponent implements OnInit {
  constructor(public userService: UserService) {}

  ngOnInit() {}
}
