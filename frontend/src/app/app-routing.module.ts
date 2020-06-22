import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import {
  MainComponent,
  ResetPasswordComponent,
  SignInComponent,
  SignUpComponent,
} from "./components";

const routes: Routes = [
  {
    path: "",
    component: MainComponent,
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
