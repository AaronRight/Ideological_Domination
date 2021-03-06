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
  public parties: Party[] = [];

  constructor(private http: HttpClient, public dialog: MatDialog) {}

  getAll() {
    this.http.get<Party[]>(`/api/parties/`).subscribe((value: Party[]) => {
      this.parties = value;
    });
  }

  get(id): Observable<Party> {
    return this.http.get<Party>(`/api/parties/${id}`);
  }

  save(party: Party) {
    return this.http.post(`/api/parties/save`, party);
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
