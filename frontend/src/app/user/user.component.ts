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
    document.getElementsByClassName("mat-tab-body-content")[0].scrollLeft =
      document.getElementsByClassName("mat-tab-body-content")[0].scrollWidth /
      3.325;

    this.updateVisibilityAndOrder({
      ifem: { display: false },
      bim: { display: true, order: 2 },
      gim: { display: true, order: 1 },
      ifjm: { display: false },
      uim: { display: true, order: 3 },
    });
  }

  mobileNavToIdeasForJudge() {
    document.getElementsByClassName("mat-tab-body-content")[0].scrollLeft = 0;
    this.updateVisibilityAndOrder({
      ifem: { display: false },
      bim: { display: false },
      gim: { display: false },
      ifjm: { display: true },
      uim: { display: false },
    });
  }

  mobileNavToGoodIdeas() {
    document.getElementsByClassName("mat-tab-body-content")[0].scrollLeft =
      document.getElementsByClassName("mat-tab-body-content")[0].scrollWidth /
      3.325;
    this.updateVisibilityAndOrder({
      ifem: { display: false },
      bim: { display: true, order: 1 },
      gim: { display: true, order: 2 },
      ifjm: { display: false },
      uim: { display: true, order: 3 },
    });
  }

  mobileNavToUninteresingIdeas() {
    document.getElementsByClassName("mat-tab-body-content")[0].scrollLeft =
      document.getElementsByClassName("mat-tab-body-content")[0].scrollWidth /
      3.325;
    this.updateVisibilityAndOrder({
      ifem: { display: false },
      bim: { display: true, order: 1 },
      gim: { display: true, order: 3 },
      ifjm: { display: false },
      uim: { display: true, order: 2 },
    });
  }

  mobileNavToIdeasForEstimation() {
    document.getElementsByClassName("mat-tab-body-content")[0].scrollLeft =
      document.getElementsByClassName("mat-tab-body-content")[0].scrollWidth /
      3.325;
    this.updateVisibilityAndOrder({
      ifem: { display: true, order: 2 },
      bim: { display: true, order: 1 },
      gim: { display: true, order: 3 },
      ifjm: { display: false },
      uim: { display: false },
    });
  }

  updateVisibilityAndOrder(config) {
    let ifem = document.getElementById("ifem");
    ifem.style.setProperty("display", config.ifem.display ? "flex" : "none");
    config.ifem.order && ifem.style.setProperty("order", config.ifem.order);
    (<HTMLElement>ifem.getElementsByClassName("mat-icon")[0]).style.setProperty(
      "align-self",
      this.alignByOrder(config.ifem.order)
    );

    let bim = document.getElementById("bim");
    bim.style.setProperty("display", config.bim.display ? "flex" : "none");
    config.bim.order && bim.style.setProperty("order", config.bim.order);
    (<HTMLElement>bim.getElementsByClassName("mat-icon")[0]).style.setProperty(
      "align-self",
      this.alignByOrder(config.bim.order)
    );

    let gim = document.getElementById("gim");
    gim.style.setProperty("display", config.gim.display ? "flex" : "none");
    config.gim.order && gim.style.setProperty("order", config.gim.order);
    (<HTMLElement>gim.getElementsByClassName("mat-icon")[0]).style.setProperty(
      "align-self",
      this.alignByOrder(config.gim.order)
    );

    let ifjm = document.getElementById("ifjm");
    ifjm.style.setProperty("display", config.ifjm.display ? "flex" : "none");
    config.ifjm.order && ifjm.style.setProperty("order", config.ifjm.order);
    (<HTMLElement>ifjm.getElementsByClassName("mat-icon")[0]).style.setProperty(
      "align-self",
      this.alignByOrder(config.ifjm.order)
    );

    let uim = document.getElementById("uim");
    uim.style.setProperty("display", config.uim.display ? "flex" : "none");
    config.uim.order && uim.style.setProperty("order", config.uim.order);
    (<HTMLElement>uim.getElementsByClassName("mat-icon")[0]).style.setProperty(
      "align-self",
      this.alignByOrder(config.uim.order)
    );
  }

  alignByOrder(order) {
    switch (order) {
      case 1:
        return "flex-end";
      case 2:
        return "center";
      case 3:
        return "flex-start";
      default:
        return "auto";
    }
  }
}
