import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ServiceService } from './../services/service.service';
import { NavController, ModalController, LoadingController, ToastController, Platform } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  DataLogin: any;
  [x: string]: any;
  constructor(
    private serviceService: ServiceService,
    public toastController: ToastController,
    private alertControl: AlertController,
    private router: Router,
  ) { }

  canActivate() {
    if (this.serviceService.DataLogin) {
      return true;
    }
    alert("Maaf, Anda Tidak Punya Akses!!");
    // this.presentAlertConfirm(); 
    return false;
  }

  async presentAlertConfirm() {
    const alert = await this.alertControl.create({
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
