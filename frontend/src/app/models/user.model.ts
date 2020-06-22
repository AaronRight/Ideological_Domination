import { Fielded } from "./fielded.interface";

export enum Role {
  ADMIN,
  USER,
  ORGANIZER,
}

export class User implements Fielded {
  getFields: Function;

  id: number;
  email: string;
  role: Role;
  name: string;

  static getFields() {
    return ["id", "email", "role", "name"];
  }
}
