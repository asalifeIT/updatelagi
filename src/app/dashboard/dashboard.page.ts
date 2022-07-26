import { Component, OnInit } from '@angular/core';
import { Platform, NavController,LoadingController } from '@ionic/angular';
import { ServiceService } from '../services/service.service';
import { Router } from '@angular/router';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  private routerEvents: any;
  Username:any;
  DataLogin:any;
  constructor(
    public loadingController: LoadingController,
    public serviceService: ServiceService,
    private router: Router,
    public util: UtilService,
    public navCtrl: NavController,
  ) { }

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.Username = this.serviceService.getUserName();
  }

  signout(){
    this.router.navigate(['home']);
  }
  ngOnDestroy() {
    if (typeof this.routerEvents !== 'undefined') this.routerEvents.unsubscribe();
  }

  dashCat(){
  this.router.navigate(['dash-aduancat']);
  }

  dashLaundry(){
    this.router.navigate(['dash-aduanlaundry']);
  }

  dashHk(){
    this.router.navigate(['dash-aduanhk']);
  }

  dashMain(){
    this.router.navigate(['dash-aduanmt']);
  }

  dashTgsHk(){
    this.router.navigate(['dash-tugashk']);
  }

  dashTgsMt(){
    this.router.navigate(['dash-tugasmt']);
  }

  dashRating(){
    this.router.navigate(['dash-ratingcatering']);
  }

  onBack(){
    this.router.navigate(['home']);
  }

}
