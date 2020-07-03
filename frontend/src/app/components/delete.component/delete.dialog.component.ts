import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Component, Inject } from "@angular/core";

@Component({
  selector: "delete.dialog",
  templateUrl: "./delete.dialog.html",
  styleUrls: ["./delete.dialog.css"],
})
export class DeleteDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  confirmDelete(): void {
    console.log("confirmDelete");
    //this.dataService.deleteIssue(this.data.id);
  }
}
