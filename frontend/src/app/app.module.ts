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
} from "./components";
import { IdeaComponent, IdeaListComponent } from "./components";
import { InitiativeComponent } from "./components/initiative/initiative.component";
import { InitiativeListComponent } from "./components/initiative/initiative-list.component";

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
  providers: [{ provide: MAT_COLOR_FORMATS, useValue: NGX_MAT_COLOR_FORMATS }],
  bootstrap: [AppComponent],

  entryComponents: [PartyEditComponent],
})
export class AppModule {}
