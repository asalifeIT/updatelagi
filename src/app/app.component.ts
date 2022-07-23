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

  showExitConfirm() {
    this.alertController.create({
      header: 'App termination',
      message: 'Do you want to close the app?',
      backdropDismiss: false,
      buttons: [{
        text: 'Stay',
        role: 'cancel',
        handler: () => {
          console.log('Application exit prevented!');
        }
      }, {
        text: 'Exit',
        handler: () => {
          navigator['app'].exitApp();
        }
      }]
    })
      .then(alert => {
        alert.present();
      });
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
    localStorage.clear();
    sessionStorage.clear();
    localStorage.removeItem("signin");
    localStorage.removeItem("access_token");
    localStorage.removeItem("roles");
    localStorage.removeItem("user");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("discount_");
    localStorage.removeItem("discount_type");
    localStorage.removeItem("home");

    FCM.deleteInstance()
      .then(() => alert(`Token deleted`))
      .catch((err) => console.log(err));
    this.router.navigate(['welcome-page']);
    location.reload();
  }

  public ngOnDestroy() {
    this.router.navigate([]);
  }
}
