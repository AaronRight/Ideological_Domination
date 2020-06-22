import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-idea",
  template: `
    <p>
      idea works!
    </p>
  `,
  styles: [],
})
export class IdeaComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

@Component({
  selector: "app-idea-list",
  template: `
    <p>
      idea-list works!
    </p>
  `,
  styles: [],
})
export class IdeaListComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
