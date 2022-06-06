import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ServiceService } from './../services/service.service';
import { NavController, ModalController, LoadingController, ToastController,Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  [x: string]: any;
  constructor(
    private serviceService:ServiceService,
      public toastController: ToastController,
  ){ }

  canActivate(){
  let Role =  JSON.parse(localStorage.getItem("roles"));
    if(Role == "ROLE_WORKER"){
      this.authenticationState.next(true);
      return true;
    }
    alert("Anda Tidak Punya Aksess!!")
    return false;
    
  }

}
