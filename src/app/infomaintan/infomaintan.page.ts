import { ServiceService } from './../services/service.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NavController, ModalController, LoadingController, ToastController, Platform } from '@ionic/angular';
import { catchError } from 'rxjs/operators';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-infomaintan',
  templateUrl: './infomaintan.page.html',
  styleUrls: ['./infomaintan.page.scss'],
})
export class InfomaintanPage implements OnInit {
  [x: string]: any;
  DataRecord: any;
  FormInfo: FormGroup;
  authService: any;
  message: any;
  aduan: any[1] = [
    { id: 1, name: '', src: '', background: '', page: '' },
  ];

  constructor(
    private serviceService: ServiceService,
    private navCtrl: NavController,
    public loadingController: LoadingController,
    public modalController: ModalController,
    private platform: Platform,
    public toastController: ToastController,
    private router: Router,
    public util: UtilService
  ) { }

  ngOnInit() {
    this.serviceService.getRecord('maintenance/my').subscribe(
      data => {
        this.DataRecord = data.body;
      },
      error => {
        console.log("err", error);
      }
    );
  }
  onBack() {
    this.router.navigate(['maintenance']);
  }
  openAdmain() {
    this.router.navigate(['aduanmaintenance']);
  }
}
