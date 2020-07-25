import { Component, OnInit, AfterViewInit, Input, Inject } from "@angular/core";
import { InitiativeService, UserService } from "../services";
import { Initiative, User } from "../models";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: "app-initiative-list",
  template: `
    <div style="display: flex; flex: 1; min-height: 0px;">
      <div
        style="flex:1; overflow-y: overlay; display: flex; flex-direction: column; "
      >
        <app-initiative
          *ngFor="let p of initiativeService.initiatives"
          [initiative]="p"
        ></app-initiative>
      </div>
    </div>
    <button
      class="desktop_nav"
      style="margin: 25px; height: 50px; align-self: flex-end; justify-content: center; align-items: center;"
      mat-fab
      color="primary"
      (click)="initiativeService.createEditDialog()"
    >
      +
    </button>
    <mat-toolbar class="mobile_nav" style="height: 56px;" color="primary">
      <button
        mat-button
        style="flex: 1;"
        (click)="initiativeService.createEditDialog()"
      >
        +
      </button>
    </mat-toolbar>
  `,
  styles: [
    ":host{height: 75vh; flex:1; display: flex; flex-direction: column; }",
  ],
})
export class InitiativeListComponent implements AfterViewInit {
  constructor(private initiativeService: InitiativeService) {}
  ngAfterViewInit() {
    this.initiativeService.getAll();
  }
}

@Component({
  selector: "app-initiative",
  template: `
    <p>
      initiative works!
    </p>
  `,
  styles: [],
})
export class InitiativeComponent implements OnInit {
  @Input() initiative: Initiative;

  constructor() {}

  ngOnInit() {}
}

@Component({
  selector: "app-initiative-edit",
  template: ` <form
    [formGroup]="initiativeForm"
    (ngSubmit)="onSubmit()"
    class="example-form"
  >
    <mat-card-content>
      <mat-form-field class="example-full-width" [formGroup]="initiativeForm">
        <input required matInput placeholder="Name" formControlName="name" />
      </mat-form-field>

      <mat-form-field class="example-full-width" [formGroup]="initiativeForm">
        <textarea
          style="height:200px"
          matInput
          placeholder="Description"
          required
          formControlName="text"
        ></textarea>
      </mat-form-field>
    </mat-card-content>

    <button mat-flat-button color="primary" class="btn-block" type="submit">
      Ok
    </button>
  </form>`,
  styles: [":host{flex:1}"],
})
export class InitiativeEditComponent {
  initiativeForm: FormGroup;
  constructor(
    public fb: FormBuilder,
    private initiativeService: InitiativeService,
    private userService: UserService,
    public dialogRef: MatDialogRef<InitiativeEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.initiativeForm = this.fb.group({
      name: [""],
      text: [""],
    });
  }

  onSubmit() {
    if (this.initiativeForm.valid) {
      let cur = new Initiative();
      cur.title = this.initiativeForm.value.name;
      cur.text = this.initiativeForm.value.text;
      cur.author = this.userService.currentUser;

      this.initiativeService.save(cur).subscribe((s) => {
        console.log(s);
        this.dialogRef.close();
      });
    }
  }
}
