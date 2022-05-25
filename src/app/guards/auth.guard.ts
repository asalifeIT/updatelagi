import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { ServiceService } from '../services/service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  [x: string]: any;
  authstatus:any;
  private isLoggedIn = false;
  constructor(
    private serviceService: ServiceService,
    private route:Router
  ) {}
  login() : void {
    this.isLoggedIn = true;
  }
  signout() : void {
    this.isLoggedIn = false;
  }
  authenticated() : boolean {
    return this.isLoggedIn;
  }

  canActivate(route:ActivatedRouteSnapshot): boolean {
    this.serviceService.authenticationState.subscribe((data) => {
      this.authstatus=data;
    });
    console.log(route);
    let authInfo = {authstatus: true,};
    if (!authInfo.authstatus) {
      this.router.navigate(['login']);
      return false;
    } 
    return true;
  }

}
