import { Fielded } from "./fielded.interface";

export class Party implements Fielded {
  getFields: Function;

  id: number;
  color: string;
  name: string;

  static getFields() {
    return ["id", "color", "name"];
  }
}
