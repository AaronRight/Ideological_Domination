import { Fielded } from "./fielded.interface";

export class Party implements Fielded {
  getFields: Function;

  id: number;
  color: string;
  title: string;

  static getFields() {
    return ["id", "color", "title"];
  }
}
