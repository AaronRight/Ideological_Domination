import { Component, OnInit } from "@angular/core";

import { User } from "../models";

import { UserService } from "../services/user.service";

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import {
  UserEditComponent,
  DeleteDialogComponent,
  InitiativeEditComponent,
  IdeaEditComponent,
  PartyEditComponent,
} from "../components";

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
    <mat-tab label="Parties">
      <crud-table
        [loadData]="loadStoryData"
        [model]="storyDataModel"
        [deleteDialog]="deleteDialog"
        [addDialog]="createEditStoryDialog"
        [editDialog]="createEditStoryDialog"
      ></crud-table>
    </mat-tab>
    <mat-tab label="Ideas">
      <crud-table
        [loadData]="loadStoryData"
        [model]="storyDataModel"
        [deleteDialog]="deleteDialog"
        [addDialog]="createEditStoryDialog"
        [editDialog]="createEditStoryDialog"
      ></crud-table>
    </mat-tab>
    <mat-tab label="Initiatives">
      <crud-table
        [loadData]="loadStoryData"
        [model]="storyDataModel"
        [deleteDialog]="deleteDialog"
        [addDialog]="createEditStoryDialog"
        [editDialog]="createEditStoryDialog"
      ></crud-table>
    </mat-tab>
  </mat-tab-group>`,
  styles: [":host { flex: 1; }"],
})
export class AdminComponent implements OnInit {
  userDataModel = User;
  loadUserData = () => this.userService.loadUsers();

  constructor(public dialog: MatDialog, public userService: UserService) {}

  deleteDialog(): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, { data: {} });
    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
    });
  }

  createEditUserDialog(row): void {
    let data = row ? { id: row.id } : {};
    const dialogRef = this.dialog.open(UserEditComponent, { data });
    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
    });
  }

  createEditInitiativeDialog(row): void {
    let data = row ? { id: row.id } : {};
    const dialogRef = this.dialog.open(InitiativeEditComponent, { data });
    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
    });
  }

  createEditIdeaDialog(row): void {
    let data = row ? { id: row.id } : {};
    const dialogRef = this.dialog.open(IdeaEditComponent, { data });
    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
    });
  }

  createEditPartyDialog(row): void {
    let data = row ? { id: row.id } : {};
    const dialogRef = this.dialog.open(PartyEditComponent, { data });
    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
    });
  }

  ngOnInit() {
    console.log(this.userService.currentUser.role);
  }
}
