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
        <!-- give local reference and tell this is manu by assigning 'matMenu' -->
        <button mat-menu-item>
          <mat-icon>dialpad</mat-icon>
          <span>Redial</span>
        </button>
        <button mat-menu-item disabled>
          <mat-icon>voicemail</mat-icon>
          <span>Check voicemail</span>
        </button>
        <button mat-menu-item>
          <mat-icon>notifications_off</mat-icon>
          <span>Disable alerts</span>
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
