import { Component, OnInit } from "@angular/core";

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
        <button mat-menu-item>
          <mat-icon>admin_panel_settings</mat-icon>
          <span>Admin</span>
        </button>
        <button mat-menu-item disabled>
          <mat-icon>assignment_ind</mat-icon>
          <span>My profile</span>
        </button>
        <button mat-menu-item>
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

  constructor() {}

  ngOnInit() {}
}
