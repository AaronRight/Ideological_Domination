import { Fielded } from "./fielded.interface";
import { User } from "./user.model";

export class Initiative implements Fielded {
  getFields: Function;

  id: number;
  text: string;
  title: string;
  author: User;

  static getFields() {
    return ["id", "text", "title"];
  }
}
