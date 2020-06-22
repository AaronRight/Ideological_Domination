import { Injectable } from "@angular/core";
import { Party } from "../models";
import { PartyEditComponent } from "../components";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

function mocParty(id, color, name) {
  let def = new Party();
  def.color = color;
  def.id = id;
  def.name = name;
  return def;
}

@Injectable({
  providedIn: "root",
})
export class PartyService {
  parties: Party[] = [];

  constructor(public dialog: MatDialog) {
    this.parties = [
      mocParty(1, "#FF0000", "Griffindor"),
      mocParty(2, "#00FF00", "Ravenclaw"),
      mocParty(3, "#0000FF", "Hafflepuff"),
      mocParty(4, "#FF00FF", "Slitherine"),
      mocParty(1, "#FF0000", "Griffindor"),
      mocParty(2, "#00FF00", "Ravenclaw"),
      mocParty(3, "#0000FF", "Hafflepuff"),
      mocParty(4, "#FF00FF", "Slitherine"),
      mocParty(1, "#FF0000", "Griffindor"),
      mocParty(2, "#00FF00", "Ravenclaw"),
      mocParty(3, "#0000FF", "Hafflepuff"),
      mocParty(4, "#FF00FF", "Slitherine"),
    ];
  }

  getAll() {
    return this.parties;
  }

  get(id) {
    for (let p of this.parties) if (p.id == id) return p;
    return undefined;
  }

  save(party: Party) {
    let newInst = true;
    for (let p of this.parties)
      if (p.id == party.id) {
        newInst = false;
        p = party;
      }
    if (newInst) this.parties.push(party);
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
