import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs';
import { ServiceService } from './../services/service.service';
import { NavController, ModalController, LoadingController, ToastController,Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  DataLogin:any;
  constructor(
    private serviceService:ServiceService,
      public toastController: ToastController,
  ){ }

  canActivate() {
    if(this.serviceService.DataLogin){
      return true;
    }
    alert("Maaf, Anda Tidak Punya Akses!!")
    return false;
  }

  
}
