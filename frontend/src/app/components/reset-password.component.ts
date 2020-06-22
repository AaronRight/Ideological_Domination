import { Component, OnInit } from "@angular/core";
//import { UserService } from "../user.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-reset-password",
  template: `
    <mat-card class="box">
      <h2>Forgot your password?</h2>

      <mat-form-field style="display:block">
        <input
          matInput
          placeholder="Enter email"
          [(ngModel)]="email"
          required
        />
      </mat-form-field>

      <button mat-raised-button (click)="resetPassword()" class="mat-primary">
        Reset Password
      </button>
    </mat-card>
  `,
  styles: [
    ":host {  align-self: center; width: 50%;}",
    ".mat-raised-button { border: 1px solid currentColor; line-height: 54px; width: 100%; }",
    "@media only screen and (max-width: 600px) { .mat-card {box-shadow: none;}  :host{  width:90%;}}",
  ],
})
export class ResetPasswordComponent implements OnInit {
  email: string;

  constructor(/*private auth: UserService, */ private router: Router) {}

  ngOnInit() {}

  resetPassword(email) {
    //this.auth.resetPassword(this.email)
    //.then(()=> this.router.navigate(['/login']))
  }
}
