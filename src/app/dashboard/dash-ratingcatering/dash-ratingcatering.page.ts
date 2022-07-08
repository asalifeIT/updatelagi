import { ServiceService } from 'src/app/services/service.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ModalController, LoadingController, ToastController } from '@ionic/angular';
import { ReplaySubject } from "rxjs/index";
import { UtilService } from 'src/app/services/util.service';
import { DetailRatingComponent } from './detail-rating/detail-rating.component';

@Component({
  selector: 'app-dash-ratingcatering',
  templateUrl: './dash-ratingcatering.page.html',
  styleUrls: ['./dash-ratingcatering.page.scss'],
})
export class DashRatingcateringPage implements OnInit {
  [x: string]: any;
  Data: any;
  DataLogin: any;
  DataRecord: any;
  Username: any;
  authenticationState = new ReplaySubject();
  message: any;

  constructor(
    private serviceService: ServiceService,
    public loadingController: LoadingController,
    public modalController: ModalController,
    public toastController: ToastController,
    private router: Router,
    public util: UtilService,
  ) { }

  ngOnInit() {
    this.getUser();
    this.getRecordRatingCatering();
  }

  getRecordRatingCatering() {
    this.serviceService.getRecord('catering/rating-catering-many').subscribe(
      data => {
        this.DataRecord = data.body;
      },
      error => {
        console.log("err", error);
      }
    );
  }

  getUser() {
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

  signout() {
    this.router.navigate(['dashboard']);
  }

  ngOnDestroy() {

    if (typeof this.routerEvents !== 'undefined') this.routerEvents.unsubscribe();
  }

  async openModal(data) {
    const modal = await this.modalController.create({
      component: DetailRatingComponent,
      componentProps: {
        data: data
      }
    });
    await modal.present();
  }
}
