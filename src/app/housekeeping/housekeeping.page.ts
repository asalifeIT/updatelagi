import { ServiceService } from './../services/service.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ModalController, LoadingController, ToastController } from '@ionic/angular';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-housekeeping',
  templateUrl: './housekeeping.page.html',
  styleUrls: ['./housekeeping.page.scss'],
})
export class HousekeepingPage implements OnInit {
  [x: string]: any;
  DataRecord: any;
  FormInfo: FormGroup;
  authService: any;
  message: any;
  aduanhkeeping: any[] = [
    { id: 1, name: '', src: '', background: '', page: '' },
  ];
  popover: any[] = [
    { id: 1, name: '', src: '', background: '', page: '' },
  ];


  constructor(
    public serviceService: ServiceService,
    public loadingController: LoadingController,
    public modalController: ModalController,
    public toastController: ToastController,
    private router: Router,
    public util: UtilService
  ) { }


  ngOnInit() {
    this.serviceService.getRecord('housekeeping/my').subscribe(
      data => {
        this.DataRecord = data.body;
      },
      error => {
        console.log("err", error);
      }
    );
  }

  openInfohk() {
    this.router.navigate(['infohk']);
  }
  openSub() {
    this.router.navigate(['sub']);
  }
   onBack() {
    this.router.navigate(['home']);
  }


}
