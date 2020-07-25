import { Fielded } from "./fielded.interface";
import { User } from "./user.model";

export class Idea implements Fielded {
  getFields: Function;

  id: number;
  text: string;
  title: string;
  access: boolean;
  author: User;

  static getFields() {
    return ["id", "text", "title", "access", "author"];
  }
}
