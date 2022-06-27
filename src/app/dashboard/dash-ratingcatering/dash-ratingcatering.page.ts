import { ServiceService } from 'src/app/services/service.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators, ReactiveFormsModule, FormArray, AbstractControl } from '@angular/forms';
import { NavController, ModalController, LoadingController, ToastController, Platform } from '@ionic/angular';
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
  DataResponse: any;
  DataCheckLogin: any;
  DataRecord: any;
  Username: any;
  authenticationState = new ReplaySubject();
  authService: any;
  message: any;
  constructor(
    private serviceService: ServiceService,
    private navCtrl: NavController,
    public loadingController: LoadingController,
    public modalController: ModalController,
    private platform: Platform,
    public toastController: ToastController,
    private router: Router,
    public util: UtilService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {

    this.serviceService.getRecord('catering/rating-catering-many').subscribe(
      data => {
        this.DataRecord = data.body;
        console.log(this.DataRecord);
      },
      error => {
        console.log("err", error);
      }
    );

    this.serviceService.CekUser().subscribe(
      data => {
        this.DataLogin = data;
        this.Username = this.DataLogin.body.name;
        localStorage.getItem(JSON.parse(localStorage.getItem("role")));
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
