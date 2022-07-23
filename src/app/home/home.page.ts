import { Component, OnInit } from '@angular/core';
import { Platform, NavController, LoadingController } from '@ionic/angular';
import { ServiceService } from '../services/service.service';
import { Router } from '@angular/router';
import { UtilService } from 'src/app/services/util.service';

import { ChangeDetectorRef } from '@angular/core';
import { ActionPerformed, PushNotifications } from '@capacitor/push-notifications';
import { FCM } from '@capacitor-community/fcm';
import { ActionPerformed as LocalActionPerformed, LocalNotifications } from '@capacitor/local-notifications';
import { Capacitor } from '@capacitor/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  [x: string]: any;
  RouterEvent: any;

  items: { id: number, text: string }[] = [];
  private readonly TOPIC_ = 'MT';
  fcmToken: string;

  catering: any[] = [
    { id: 1, name: 'Catering', src: 'assets/svg/dining.svg', background: '', page: '' },
  ];

  laundry: any[] = [
    { id: 1, name: 'Laundry', src: 'assets/svg/washing-machine.svg', background: '', page: '' },
  ];

  housekeeping: any[] = [
    { id: 1, name: 'HouseKeeping', src: 'assets/svg/handyman.svg', background: '', page: '' },
  ];

  maintenance: any[] = [
    { id: 1, name: 'Maintenance', src: 'assets/svg/builder.svg', background: '', page: '' },
  ];
  dashboard: any[] = [
    { id: 1, name: 'Dashboard', src: 'assets/svg/dashboard.svg', background: '', page: '' },
  ];
  info: any[] = [
    { id: 1, name: 'Informasi', src: 'assets/svg/info.svg', background: '', page: '' },
  ];

  Username: any;
  DataLogin: any;
  Dismis: any;
  constructor(
    public loadingController: LoadingController,
    public serviceService: ServiceService,
    private router: Router,
    public util: UtilService,
    public navCtrl: NavController,
    public platform: Platform,
    private readonly changeDetectorRef: ChangeDetectorRef
  ) {
    this.initFCM().then(() => {
      FCM.subscribeTo({ topic: this.TOPIC_ });
      this.getFcmToken();
    });
   }

  ngOnInit() {
    this.serviceService.CekUser().subscribe(
      data => {
        this.DataLogin = data;
        this.Username = this.DataLogin.body.name;
      },
      error => {
        console.log("error");
      }
    );

  }

  deactivateBackButton() {
    this.subscribe = this.platform.backButton.subscribeWithPriority(666666, () => {
      if (this.constructor.name == "HomePage") {
        if (window.confirm("Do you want to exit app")) {
          navigator["app"].exitApp();
        }
      }
    });
  }

  async signout() {
    const loading = await this.loadingController.create({
      message: 'Please wait...'
    });
    await loading.present();
    localStorage.clear();
    this.serviceService.signout();
    loading.dismiss();
  }

  openRest() {
    this.router.navigate(['catering']);
  }

  openHkeeping() {
    this.router.navigate(['housekeeping']);
  }

  openLaundry() {
    this.router.navigate(['infolaundry']);
  }

  openMaintenance() {
    this.router.navigate(['maintenance']);
  }

  openDashboard() {
    this.router.navigate(['dashboard']);
  }
  public ngOnDestroy() {
    this.router.navigate([]);
  }

  openInfo() {
    this.router.navigate(['information']);
  }

  handleNotification(data: { text: string, id: number }): void {
    if (!data.text) {
      return;
    }

    this.items.splice(0, 0, { id: data.id, text: data.text });

    if (this.items.length > 1) {
      this.items.pop();
    }

    this.changeDetectorRef.detectChanges();
  }

  private async initFCM(): Promise<void> {
    await PushNotifications.requestPermissions();

    PushNotifications.addListener('registrationError',
      error => console.log('Error on registration: ' + JSON.stringify(error)));

    PushNotifications.addListener('pushNotificationReceived',
      notification => {
        this.handleNotification(notification.data);

        LocalNotifications.schedule({
          notifications: [{
            title: notification.title ?? '',
            body: notification.body ?? '',
            id: Date.now(),
            extra: notification.data,
            smallIcon: 'res://ic_stat_name'
          }]
        });
      }
    );

    PushNotifications.addListener('pushNotificationActionPerformed',
      (event: ActionPerformed) => {
        this.handleNotification(event.notification.data);
      }
    );

    LocalNotifications.addListener('localNotificationActionPerformed',
      (event: LocalActionPerformed) => {
        this.handleNotification(event.notification.extra);
      });

  }

  async askFcmPermission(): Promise<boolean> {
    const checked = await PushNotifications.checkPermissions()
    let status: 'prompt' | 'prompt-with-rationale' | 'granted' | 'denied' = checked.receive

    if (status === 'prompt' || status === 'prompt-with-rationale') {
      const requested = await PushNotifications.requestPermissions()
      status = requested.receive
    }

    return status === 'granted'
  }

  getFcmToken(): Promise<string> {
    return new Promise((resolve, reject) => {
      if (Capacitor.getPlatform() === 'web') return resolve('')

      PushNotifications.addListener('registration', ({ value }) => {
        if (Capacitor.getPlatform() === 'android') {
          resolve(value)
          this.fcmToken = value
          return
        }

        if (Capacitor.getPlatform() === 'ios') {
          FCM.getToken()
            .then(({ token }) => resolve(token))
            .catch((error) => reject(error))
          return
        }

        reject(new Error('?'))
      })

      this.askFcmPermission()
        .then((granted) => {
          if (granted) {
            PushNotifications.register().catch((error) => reject(error))
          } else {
            reject(new Error('denied'))
          }
        })
        .catch((error) => reject(error))
    })
  }
}






