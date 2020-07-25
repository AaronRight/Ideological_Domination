import { Injectable } from "@angular/core";
import { Initiative } from "../models";
import { InitiativeEditComponent } from "../components";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class InitiativeService {
  public initiatives: Initiative[] = [];

  constructor(private http: HttpClient, public dialog: MatDialog) {}

  getAll() {
    this.http
      .get<Initiative[]>(`/api/initiatives/`)
      .subscribe((value: Initiative[]) => {
        this.initiatives = value;
      });
  }

  get(id): Observable<Initiative> {
    return this.http.get<Initiative>(`/api/initiatives/${id}`);
  }

  save(initiative: Initiative) {
    return this.http.post(`/api/initiatives/save`, initiative);
  }

  rank() {}

  createEditDialog(row): void {
    let data = row ? { id: row.id } : {};

    let dialogRef = this.dialog.open(InitiativeEditComponent, {
      data,
      width: "100%",
      maxWidth: "none",
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
    });
  }
}
