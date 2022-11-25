import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanActivateChild {
  /**
   *
   */
  constructor(private AuthService: AuthService, private router: Router) {}
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    if (!!localStorage.getItem('token')) {
      console.log(this.AuthService, 'auth success');
      //this.router.navigate(['/dashboard']);
      return true;
    } else {
      console.log(this.AuthService, 'auth failed');
      this.router.navigate(['/login']);
      return false;
    }
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (!!localStorage.getItem('token')) {
      console.log(this.AuthService, 'auth success');
      //this.router.navigate(['/dashboard']);
      return true;
    } else {
      console.log(this.AuthService, 'auth failed');
      this.router.navigate(['/login']);
      return false;
    }
  }
}
