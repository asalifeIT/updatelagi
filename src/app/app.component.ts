import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Platform, NavController, AlertController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { UtilService } from 'src/app/services/util.service';
import { ServiceService } from './services/service.service';
import { Location } from '@angular/common';
import { MenuController, ModalController } from '@ionic/angular';
import { FCM } from '@capacitor-community/fcm';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent {
  rootPage: any = 'TablePage';
  [x: string]: any;
  Username: any;
  DataLogin: any;
  loadingController: any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public serviceService: ServiceService,
    private navCtrl: NavController,
    private router: Router,
    private _location: Location,
    public alertController: AlertController,
    private modalCtrl: ModalController, private menuCtrl: MenuController,
    public util: UtilService) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
    this.initializeApp();
  }
  close() {
    this.menuCtrl.close();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.Auth();
    });
  }

  Auth() {
    this.serviceService.authenticationState.subscribe((data) => {
      if (data == true) {
        this.navCtrl.navigateRoot(['home']);
      } else {
        this.navCtrl.navigateRoot(['welcome-page']);
      }
    });
    this.platform.backButton.subscribeWithPriority(10, (processNextHandler) => {
      console.log('Back press handler!');
      if (this._location.isCurrentPathEqualTo('/home')) {
        // Show Exit Alert!
        console.log('Show Exit Alert!');
        this.showExitConfirm();
        processNextHandler();
      } else {
        // Navigate to back page
        console.log('Navigate to back page');
        this._location.back();
      }
    });
  }

  async showExitConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Konfirmasi Logout',
      message: 'Apakah Anda ingin keluar aplikasi?',
      buttons: [
        {
          text: 'Batal',
          role: 'cancel',
          handler: () => {
          },
        },
        {
          text: 'Exit',
          cssClass: 'secondary',
          handler: () => {
            this.logout();
          },
        },
      ],
    });

    await alert.present();
  }

  home() {
    this.router.navigate(['home']);
  }

  ngOnInit() {
    //ambil data dari localstorage
    let dataStorage = JSON.parse(localStorage.getItem(this.serviceService.TOKEN_KEY));
    // this.Username=dataStorage.data.Username;
    this.serviceService.CekUser().subscribe(
      data => {
        this.DataLogin = data;
        console.log(this.DataLogin)
        this.Username = this.DataLogin.body.name;
      },
      error => {
        console.log("error");
      }
    );

  }

  logout() {
    const user = JSON.parse(localStorage.getItem('user'));
    const roleUser = user.roles[2];
    FCM.unsubscribeFrom({ topic: roleUser });
    
    localStorage.clear();
    sessionStorage.clear();
    localStorage.removeItem("signin");
    localStorage.removeItem("access_token");
    localStorage.removeItem("roles");
    localStorage.removeItem("user");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("home");

    FCM.deleteInstance()
      .then(() => alert(`Token deleted`))
      .catch((err) => console.log(err));
    this.router.navigate(['welcome-page']);
    location.reload();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Coming soon...',
      message: 'Fitur ini belum tersedia',
      buttons: ['OK'],
    });

    await alert.present();
  }

  public ngOnDestroy() {
    this.router.navigate([]);
  }
}
