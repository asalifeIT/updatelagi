import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { ServiceService } from './../services/service.service';
import { ToastController, AlertController } from '@ionic/angular';
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
    private alertController: AlertController,
    private router: Router,
  ) { }

  canActivate() {
    if (this.serviceService.DataLogin) {
      return true;
    }
    this.presentAlertConfirm(); 
    console.log('test')
    return false; 
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
