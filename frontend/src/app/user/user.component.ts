import { Component, OnInit, Inject } from "@angular/core";
import { DOCUMENT } from "@angular/common";

import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from "@angular/cdk/drag-drop";
import { DomSanitizer } from "@angular/platform-browser";
import { MatIconRegistry } from "@angular/material/icon";

@Component({
  selector: "app-user",
  templateUrl: `user.component.html`,
  styleUrls: ["user.component.css"],
})
export class UserComponent implements OnInit {
  constructor(
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    @Inject(DOCUMENT) document
  ) {
    iconRegistry.addSvgIcon(
      "boring",
      sanitizer.bypassSecurityTrustResourceUrl("assets/boring.svg")
    );
    iconRegistry.addSvgIcon(
      "libra",
      sanitizer.bypassSecurityTrustResourceUrl("assets/libra.svg")
    );
  }

  ngOnInit() {}

  /*
    1. все доступные для его оценки, но ещё не оценённые
    2. одобряемые участником идеи (упорядоченным списком)
    3. неодобряемые участником идеи (упорядоченным списком)
    4. неинтересные ему идеи (к оценке которых участник безразличен)
    5. предложенные им идеи(если есть).
    6. идеи на допуск к оценке(read only), там можно поставить +/- за то, чтобы идея попала на общее голосование.
  */

  good_ideas = ["Заниматься спортом"];
  bad_ideas = ["Выпить лишнего"];
  ideas_for_estimation = ["Сделать курсач"];
  my_ideas = ["Нарисовать скетч"];
  uninteresting_ideas = ["Сыграть в боулинг"];
  ideas_for_judge = ["Сыграть в шахматы"];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  mobileNavToBadIdeas() {
    document.getElementById("ifem").style.setProperty("display", "none");
    document.getElementById("bim").style.setProperty("display", "flex");
    document.getElementById("gim").style.setProperty("display", "flex");
    document.getElementById("ifjm").style.setProperty("display", "none");
    document.getElementById("uim").style.setProperty("display", "flex");
  }

  mobileNavToIdeasForJudge() {
    document.getElementById("ifem").style.setProperty("display", "none");
    document.getElementById("bim").style.setProperty("display", "none");
    document.getElementById("gim").style.setProperty("display", "none");
    document.getElementById("ifjm").style.setProperty("display", "flex");
    document.getElementById("uim").style.setProperty("display", "none");
  }

  mobileNavToGoodIdeas() {
    document.getElementById("ifem").style.setProperty("display", "none");
    document.getElementById("bim").style.setProperty("display", "flex");
    document.getElementById("gim").style.setProperty("display", "flex");
    document.getElementById("ifjm").style.setProperty("display", "none");
    document.getElementById("uim").style.setProperty("display", "flex");
  }

  mobileNavToUninteresingIdeas() {
    document.getElementById("ifem").style.setProperty("display", "none");
    document.getElementById("bim").style.setProperty("display", "flex");
    document.getElementById("gim").style.setProperty("display", "flex");
    document.getElementById("ifjm").style.setProperty("display", "none");
    document.getElementById("uim").style.setProperty("display", "flex");
  }

  mobileNavToIdeasForEstimation() {
    document.getElementById("ifem").style.setProperty("display", "flex");
    document.getElementById("bim").style.setProperty("display", "flex");
    document.getElementById("gim").style.setProperty("display", "flex");
    document.getElementById("ifjm").style.setProperty("display", "none");
    document.getElementById("uim").style.setProperty("display", "none");
  }
}
