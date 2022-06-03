import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    return this.isAtuhorized(route);
  }

  const isAtuhorized(route:ActivatedRouteSnapshot):boolean{
  const roles =['USER','ADMIN'];
  const expectedRoles = route.data.expectedRoles;
  const roleMatches = roles.indexOf(role => expectedRoles.indexOf(role) !== -1);
  return (roleMatches < 0) ? false : true;
  }
  
}
