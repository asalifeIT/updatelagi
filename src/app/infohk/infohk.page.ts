import { ServiceService } from './../services/service.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ModalController, LoadingController, ToastController } from '@ionic/angular';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-infohk',
  templateUrl: './infohk.page.html',
  styleUrls: ['./infohk.page.scss'],
})
export class InfohkPage implements OnInit {
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

  canScroll() {
    return (this.DataRecord.length > 5 ) 
  }

  onBack() {
    this.router.navigate(['housekeeping']);
  }

  openAdhk() {
    this.router.navigate(['aduanhk']);
  }

  getValueStatusBar(status) {
    if (status == 'CLEANING_PROGRESS') return 0.5;
    if (status == 'DONE') return 1;
  }
}
