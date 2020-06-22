import { Component, OnInit } from "@angular/core";

import { User } from "../models";

import { UserService } from "../services/user.service";

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { DeleteDialogComponent } from "./shared/delete/delete.dialog.component";
import { UserEditComponent } from "./user/user-edit/user-edit.component";

@Component({
  selector: "admin",
  template: ` <mat-tab-group>
    <mat-tab label="Users">
      <crud-table
        [loadData]="loadUserData"
        [model]="userDataModel"
        [deleteDialog]="deleteDialog"
        [addDialog]="createEditUserDialog"
        [editDialog]="createEditUserDialog"
      ></crud-table>
    </mat-tab>
    <mat-tab label="Stories">
      <crud-table
        [loadData]="loadStoryData"
        [model]="storyDataModel"
        [deleteDialog]="deleteDialog"
        [addDialog]="createEditStoryDialog"
        [editDialog]="createEditStoryDialog"
      ></crud-table>
    </mat-tab>
    <mat-tab label="Purchases">
      //TODO
    </mat-tab>
    <mat-tab label="Ratings">
      //TODO
    </mat-tab>
  </mat-tab-group>`,
  styles: [":host { flex: 1; }"],
})
export class AdminComponent implements OnInit {
  userDataModel = User;
  loadUserData = () => this.userService.loadUsers();

  constructor(public dialog: MatDialog, public userService: UserService) {}

  deleteDialog(): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      data: {},
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
      //this.router.navigate(["."], { relativeTo: this.route });
    });
  }

  createEditUserDialog(row): void {
    let data = row ? { id: row.id } : {};

    const dialogRef = this.dialog.open(UserEditComponent, {
      data,
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
      //this.router.navigate(["."], { relativeTo: this.route });
    });
  }

  ngOnInit() {
    console.log(this.userService.currentUser.role);
  }
}
