export class SignUpInfo {
  nickName: string;
  email: string;
  role: string;
  password: string;

  constructor(nickname: string, email: string, password: string, role: string) {
    this.nickName = nickname;
    this.email = email;
    this.password = password;
    this.role = role;
  }
}
