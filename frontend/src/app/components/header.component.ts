import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { TokenStorageService } from "../security/token-storage.service";

@Component({
  selector: "app-header",
  template: `
    <mat-toolbar color="primary">
      <button
        style="margin-right: 15px;"
        mat-icon-button
        [matMenuTriggerFor]="menu"
      >
        <!-- pass local reference of mat-menu to be opened on this click -->
        <mat-icon>more_vert</mat-icon>
      </button>
      <mat-menu #menu="matMenu">
        <button mat-menu-item (click)="admin()">
          <mat-icon>admin_panel_settings</mat-icon>
          <span>Admin</span>
        </button>
        <button mat-menu-item (click)="myProfile()">
          <mat-icon>assignment_ind</mat-icon>
          <span>My Profile</span>
        </button>
        <button mat-menu-item (click)="logout()">
          <mat-icon>exit_to_app</mat-icon>
          <span>Logout</span>
        </button>
      </mat-menu>
      <span>{{ header_title }}</span>
      <span style="flex: 1 1 auto;"></span>
      <img
        src="assets/user.svg"
        style="border: solid white; border-radius: 20%;"
      />
    </mat-toolbar>
  `,
  styles: [],
})
export class HeaderComponent implements OnInit {
  header_title = "Title";

  constructor(private router: Router, private token: TokenStorageService) {}

  ngOnInit() {}

  admin() {
    this.router.navigate(["/admin"]);
  }
  myProfile() {
    this.router.navigate(["/my-profile"]);
  }
  logout() {
    this.token.signOut();
    window.location.reload();
  }
}
