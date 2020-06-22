import { Component, OnInit } from "@angular/core";
//import { UserService } from "../../user/user.service";
import { Role } from "../../models";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.css"],
})
export class SignUpComponent {
  roles = Object.keys(Role).filter((obj) => isNaN(Number(obj)));
  hide: false;
  signUpForm: FormGroup;

  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = "";

  constructor(
    public fb: FormBuilder,
    //private userService: UserService,
    private router: Router
  ) {
    this.signUpForm = this.fb.group({
      nickName: ["", []],
      email: ["", [Validators.email, Validators.required]],
      password: [
        "",
        [
          /*Validators.pattern('regex'),
           Validators.maxLength(25),
           Validators.minLength(6),*/
        ],
      ],
      role: ["", [Validators.required]],
    });
  }

  get nickName() {
    return this.signUpForm.get("nickName");
  }

  get email() {
    return this.signUpForm.get("email");
  }

  get password() {
    return this.signUpForm.get("password");
  }

  get role() {
    return this.signUpForm.get("role");
  }

  onSubmit() {
    console.log(this.signUpForm);

    /*
    this.userService.signUp(this.signupInfo).subscribe(
      (data) => {
        console.log(data);
        this.isSignedUp = true;
        this.isSignUpFailed = false;
        this.router.navigateByUrl("/");
      },
      (error) => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isSignUpFailed = true;
      }
    );*/
  }
}
