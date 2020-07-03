import { Component, Input, Inject, AfterViewInit } from "@angular/core";
import { Party } from "../models";
import { PartyService } from "../services";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: "app-party",
  template: `
    <mat-card class="party_body">
      <div class="party_name">{{ party.name }}</div>
      <mat-card class="party_color" [style.background]="party.color"></mat-card>
      <mat-chip-list class="party_join">
        <mat-chip color="primary" selected>Join</mat-chip>
      </mat-chip-list>
    </mat-card>
  `,
  styles: [
    ":host{margin: 5px;}",
    ".party_body{display: flex; align-items: center; flex-direction: row; justify-content: space-around;}}",
    ".party_name{ flex: 1}",
    ".party_color{width: 20px; height: 20px; flex: 0.1;}",
    ".party_join{ flex: 0.1;}",
  ],
})
export class PartyComponent {
  @Input() party: Party;

  constructor() {}
}

@Component({
  selector: "app-party-list",
  template: `
    <div style="display: flex; flex: 1; min-height: 0px;">
      <div
        style="flex:1; overflow-y: overlay; display: flex; flex-direction: column; "
      >
        <app-party *ngFor="let p of parties" [party]="p"></app-party>
      </div>
    </div>
    <button
      class="desktop_nav"
      style="height: 50px; align-self: flex-end; justify-content: center;"
      mat-fab
      color="primary"
      (click)="partyService.createEditDialog()"
    >
      +
    </button>
    <mat-toolbar class="mobile_nav" style="height: 56px;" color="primary">
      <button
        mat-button
        style="flex: 1;"
        (click)="partyService.createEditDialog()"
      >
        +
      </button>
    </mat-toolbar>
  `,
  styles: [
    ":host{height: 75vh; flex:1; display: flex; flex-direction: column; }",
  ],
})
export class PartyListComponent implements AfterViewInit {
  parties: Party[];
  constructor(private partyService: PartyService) {}
  ngAfterViewInit() {
    this.partyService.getAll().subscribe((value: Party[]) => {
      this.parties = value;
    });
  }
}

@Component({
  selector: "app-party-edit",
  template: ` <form
    [formGroup]="partyForm"
    (ngSubmit)="onSubmit()"
    class="example-form"
  >
    <mat-card-content>
      <mat-form-field class="example-full-width" [formGroup]="partyForm">
        <input required matInput placeholder="Name" formControlName="name" />
      </mat-form-field>

      <mat-form-field class="example-full-width" [formGroup]="partyForm">
        <input
          matInput
          [ngxMatColorPicker]="picker"
          formControlName="color"
          placeholder="Color"
          required
        />
        <ngx-mat-color-toggle matSuffix [for]="picker"></ngx-mat-color-toggle>
        <ngx-mat-color-picker
          #picker
          [touchUi]="touchUi"
          [color]="color"
        ></ngx-mat-color-picker>
      </mat-form-field>
    </mat-card-content>

    <button mat-flat-button color="primary" class="btn-block" type="submit">
      Ok
    </button>
  </form>`,
  styles: [":host{flex:1}"],
})
export class PartyEditComponent {
  partyForm: FormGroup;
  constructor(
    public fb: FormBuilder,
    private partyService: PartyService,
    public dialogRef: MatDialogRef<PartyEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.partyForm = this.fb.group({
      name: [""],
      color: [""],
    });
  }

  onSubmit() {
    if (this.partyForm.valid) {
      let cur = new Party();
      cur.id = 123;
      cur.color = "#" + this.partyForm.value.color.hex;
      cur.name = this.partyForm.value.name;
      this.partyService.save(cur);
      this.dialogRef.close();
    }
  }
}
