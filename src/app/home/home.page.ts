import { Component, OnInit } from '@angular/core';
import { Platform, NavController, LoadingController } from '@ionic/angular';
import { ServiceService } from '../services/service.service';
import { Router } from '@angular/router';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  [x: string]: any;
  RouterEvent: any;
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
    public platform: Platform

  ) { }

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

}






