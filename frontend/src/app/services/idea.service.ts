import { Injectable } from "@angular/core";
import { Idea } from "../models";
import { IdeaEditComponent } from "../components";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class IdeaService {
  public ideas: Idea[] = [];

  constructor(private http: HttpClient, public dialog: MatDialog) {}

  getAll() {
    this.http.get<Idea[]>(`/api/ideas/`).subscribe((value: Idea[]) => {
      console.log(value);
      this.ideas = value;
    });
  }

  get(id): Observable<Idea> {
    return this.http.get<Idea>(`/api/ideas/${id}`);
  }

  save(idea: Idea) {
    return this.http.post(`/api/ideas/save`, idea);
  }

  rank() {}

  createEditDialog(row): void {
    let data = row ? { id: row.id } : {};

    const dialogRef = this.dialog.open(IdeaEditComponent, {
      data,
      width: "100%",
      maxWidth: "none",
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
    });
  }
}
