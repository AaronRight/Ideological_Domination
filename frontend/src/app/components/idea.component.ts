import { Component, OnInit, AfterViewInit, Input, Inject } from "@angular/core";
import { IdeaService, UserService } from "../services";
import { Idea, User } from "../models";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: "app-idea",
  template: `
    <div class="t_d">
      <div class="t_d_l">
        <input type="radio" name="group_1" class="t_l" value="-5" />
        <input type="radio" name="group_1" class="t_l" value="-4" />
        <input type="radio" name="group_1" class="t_l" value="-3" />
        <input type="radio" name="group_1" class="t_l" value="-2" />
        <input type="radio" name="group_1" class="t_l" value="-1" />
      </div>
      <div class="t_d_content">
        Idea
      </div>
      <div class="t_d_r">
        <input type="radio" name="group_1" class="t_r" value="1" />
        <input type="radio" name="group_1" class="t_r" value="2" />
        <input type="radio" name="group_1" class="t_r" value="3" />
        <input type="radio" name="group_1" class="t_r" value="4" />
        <input type="radio" name="group_1" class="t_r" value="5" />
      </div>
    </div>
  `,
  styles: [
    ".t_d{ display: flex; flex- direction: row; justify- content: center; align - items: center; }",
    ".t_d_r{ display: flex; flex - direction: row - reverse; flex: 1; justify - content: flex - end; }",
    ".t_d_l{ display: flex; flex - direction: row; flex: 1; justify - content: flex - end; }",
    ".t_d_content{  margin: 0px 5px 0px 10px;}",
    ".t_l{ width: 5px; height: 0px; float: right; font - size: 200 %; visibility: hidden; color: gray; margin - top: -20px; }",
    '.t_l: after{ content: "▌"; visibility: visible; }',
    ".t_l: hover{ color: #55F!important; }",
    ".t_l: checked ~ .t_l { color: #00F; }",
    ".t_l: checked { color: #00F; }",
    ".t_r{ width: 5px; height: 0px; float: right; font - size: 200 %; visibility: hidden; color: gray; margin - top: -20px; }",
    '.t_r: after{ content: "▌"; visibility: visible; }',
    ".t_r: hover{ color: #F55!important; }",
    ".t_r: checked ~ .t_r { color: #F00; }",
    ".t_r: checked { color: #F00; }",
  ],
})
export class IdeaComponent implements OnInit {
  @Input() idea: Idea;

  constructor() {}

  ngOnInit() {}
}

@Component({
  selector: "app-idea-list",
  template: `
    <div style="display: flex; flex: 1; min-height: 0px;">
      <div
        style="flex:1; overflow-y: overlay; display: flex; flex-direction: column; "
      >
        <app-idea *ngFor="let p of ideaService.ideas" [idea]="p"></app-idea>
      </div>
    </div>
    <button
      class="desktop_nav"
      style="margin: 25px; height: 50px; align-self: flex-end; justify-content: center; align-items: center;"
      mat-fab
      color="primary"
      (click)="ideaService.createEditDialog()"
    >
      +
    </button>
    <mat-toolbar class="mobile_nav" style="height: 56px;" color="primary">
      <button
        mat-button
        style="flex: 1;"
        (click)="ideaService.createEditDialog()"
      >
        +
      </button>
    </mat-toolbar>
  `,
  styles: [
    ":host{height: 75vh; flex:1; display: flex; flex-direction: column; }",
  ],
})
export class IdeaListComponent implements AfterViewInit {
  constructor(private ideaService: IdeaService) {}
  ngAfterViewInit() {
    this.ideaService.getAll();
  }
}

@Component({
  selector: "app-idea-edit",
  template: `
    <form [formGroup]="ideaForm" (ngSubmit)="onSubmit()" class="example-form">
      <mat-card-content>
        <mat-form-field class="example-full-width" [formGroup]="ideaForm">
          <input required matInput placeholder="Name" formControlName="name" />
        </mat-form-field>

        <mat-form-field class="example-full-width" [formGroup]="ideaForm">
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
    </form>
  `,
  styles: [],
})
export class IdeaEditComponent {
  ideaForm: FormGroup;
  constructor(
    public fb: FormBuilder,
    private ideaService: IdeaService,
    private userService: UserService,
    public dialogRef: MatDialogRef<IdeaEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.ideaForm = this.fb.group({
      name: [""],
      text: [""],
    });
  }

  onSubmit() {
    if (this.ideaForm.valid) {
      let cur = new Idea();
      cur.title = this.ideaForm.value.name;
      cur.text = this.ideaForm.value.text;
      cur.author = this.userService.currentUser;

      this.ideaService.save(cur).subscribe((s) => {
        this.dialogRef.close();
      });
    }
  }
}
