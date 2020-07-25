import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppMaterialModule } from "./app-material.module";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import {
  PartyComponent,
  PartyListComponent,
  PartyEditComponent,
  HeaderComponent,
  MainComponent,
  ResetPasswordComponent,
  SignInComponent,
  SignUpComponent,
  AdminComponent,
  CrudTableComponent,
  IdeaComponent,
  IdeaListComponent,
  InitiativeComponent,
  InitiativeListComponent,
  InitiativeEditComponent,
  IdeaEditComponent,
  UserEditComponent,
} from "./components";

import { httpInterceptorProviders } from "./security/auth-interceptor";
import { AuthGuardService } from "./security/auth-guard.service";

//import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {
  MAT_COLOR_FORMATS,
  NgxMatColorPickerModule,
  NGX_MAT_COLOR_FORMATS,
} from "@angular-material-components/color-picker";

@NgModule({
  declarations: [
    AppComponent,
    ResetPasswordComponent,
    SignInComponent,
    SignUpComponent,
    MainComponent,
    PartyComponent,
    PartyListComponent,
    PartyEditComponent,
    IdeaComponent,
    IdeaListComponent,
    InitiativeComponent,
    InitiativeListComponent,
    HeaderComponent,
    AdminComponent,
    CrudTableComponent,
    InitiativeEditComponent,
    IdeaEditComponent,
    UserEditComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    DragDropModule,
    HttpClientModule,
    NgxMatColorPickerModule,
  ],
  providers: [
    httpInterceptorProviders,
    AuthGuardService,
    { provide: MAT_COLOR_FORMATS, useValue: NGX_MAT_COLOR_FORMATS },
  ],
  entryComponents: [
    PartyEditComponent,
    InitiativeEditComponent,
    IdeaEditComponent,
    UserEditComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
