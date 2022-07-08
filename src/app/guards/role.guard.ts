import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ServiceService } from './../services/service.service';
import { NavController, ModalController, LoadingController, ToastController, Platform, AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  [x: string]: any;
  DataLogin:any;
  constructor(
    private serviceService:ServiceService,
      public toastController: ToastController,
      public alertController: AlertController,
  ){ }

  canActivate(){
    let Role= JSON.parse(localStorage.getItem("role"));
    if(Role == "ROLE_WORKER"){
    //  alert("Anda Login Sebagai WORKER")
      return true;
      } else {
        if(Role == "ROLE_MEGAUSER"){
          // alert("Anda Login Sebagai MEGA USER")
           return true;
      } else {
        if(Role == "ROLE_SUPERUSER"){
          // alert("Anda Login Sebagai SUPER USER")
           return true;
      } else {
        if(Role == "ROLE_HCGS"){
          // alert("Anda Login Sebagai HCGS")
           return true;
    }else {
      if(Role == "ROLE_CUSTOMER"){
        // alert("Anda Login Sebagai CUSTOMER")
         return true;
        }
     }
   }
  }

    this.presentAlertConfirm();
    return false;
    } 
   
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Perhatian!',
      message: 'Anda Tidak Punya Akses. Silakan Login',
      buttons: [
        {
          text: 'Okay',
          handler: () => {
            this.router.navigate(['login']);
          },
        },
      ],
    });
    await alert.present();
  }
}

