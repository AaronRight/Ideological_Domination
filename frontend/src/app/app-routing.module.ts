import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuardService } from "./security/auth-guard.service";

import {
  MainComponent,
  ResetPasswordComponent,
  SignInComponent,
  SignUpComponent,
  AdminComponent,
} from "./components";

const routes: Routes = [
  {
    path: "",
    component: MainComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: "reset-password",
    component: ResetPasswordComponent,
  },
  {
    path: "sign-in",
    component: SignInComponent,
  },
  {
    path: "sign-up",
    component: SignUpComponent,
  },
  {
    path: "admin",
    component: AdminComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
