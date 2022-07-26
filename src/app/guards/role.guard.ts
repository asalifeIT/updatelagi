import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { ServiceService } from './../services/service.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(public authenticationService: ServiceService) { }

  canActivate(): boolean {
    return this.authenticationService.isAuthenticated();
  }
}

