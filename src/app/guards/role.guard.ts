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
    let Role= JSON.parse(localStorage.getItem("role"));
    if(Role == "ROLE_WORKER"){
     alert("Anda Login Sebagai WORKER")
      return true;
      } else {
        if(Role == "ROLE_MEGAUSER"){
          alert("Anda Login Sebagai MEGA USER")
           return true;
      } else {
        if(Role == "ROLE_SUPERUSER"){
          alert("Anda Login Sebagai SUPER USER")
           return true;
      }else {
        if(Role == "ROLE_HCGS"){
          alert("Anda Login Sebagai HCGS")
           return true;
    }
  }

  }

    alert("Maaf, Anda Tidak Punya Aksess!!!")
    return false;
    } 
   
  }
}

