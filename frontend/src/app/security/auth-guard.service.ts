import { Injectable } from "@angular/core";
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from "@angular/router";
import { TokenStorageService } from "./token-storage.service";

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private token: TokenStorageService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.token.logged) {
      return true;
    } else {
      this.router.navigate(["/signin"], {
        queryParams: {
          return: state.url,
        },
      });
      return false;
    }
  }
}
