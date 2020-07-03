import { Injectable } from "@angular/core";
import { Party } from "../models";
import { PartyEditComponent } from "../components";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class PartyService {
  constructor(private http: HttpClient, public dialog: MatDialog) {}

  getAll(): Observable<Party[]> {
    return this.http.get<Party[]>(`/api/parties/`);
  }

  get(id): Observable<Party> {
    return this.http.get<Party>(`/api/parties/${id}`);
  }

  save(party: Party) {
    this.http.post(`/api/parties/save`, party);
  }

  join() {}

  createEditDialog(row): void {
    let data = row ? { id: row.id } : {};

    const dialogRef = this.dialog.open(PartyEditComponent, {
      data,
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
    });
  }
}
