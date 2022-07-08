import { ServiceService } from 'src/app/services/service.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ModalController, LoadingController, ToastController } from '@ionic/angular';
import { ReplaySubject } from "rxjs/index";
import { UtilService } from 'src/app/services/util.service';
import { UpdateStatusAndDetailComponent } from './update-status-and-detail/update-status-and-detail.component';

@Component({
  selector: 'app-dash-aduanmt',
  templateUrl: './dash-aduanmt.page.html',
  styleUrls: ['./dash-aduanmt.page.scss'],
})
export class DashAduanmtPage implements OnInit {
  [x: string]: any;
  authenticationState = new ReplaySubject();
  message: any;
  Data: any;
  DataLogin: any;
  DataRecord: any;
  DataUsersMt: any;

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
    this.getRecordMaintenance();
    this.getUsersMt();
  }

  getUsersMt() {
    this.serviceService.getRecord('users/mt').subscribe(
      data => {
        this.DataUsersMt = data.body;
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

  getRecordMaintenance() {
    this.serviceService.getRecord('maintenance/all').subscribe(
      data => {
        this.DataRecord = data.body;
      },
      error => {
        console.log("err", error);
      }
    );
  }

  async presentToast(Message) {
    const toast = await this.toastController.create({
      message: Message,
      duration: 2500,
      position: "top"
    });
    toast.present();
  }

  onBack() {
    this.router.navigate(['dashboard']);
  }

  ngOnDestroy() {
    if (typeof this.routerEvents !== 'undefined') this.routerEvents.unsubscribe();
  }

  async openModal(data) {
    if (this.serviceService.isHasAccess('MAINTENANCE', 'COMPLAINT', 'EDIT')) {
      const modal = await this.modalController.create({
        component: UpdateStatusAndDetailComponent,
        componentProps: {
          id: data.id,
          status: data.status,
          priority: data.priority,
          duration: data.duration,
          pic_nrp: data.pic_nrp,
          usersMt: this.DataUsersMt
        }
      });
      await modal.present();
      const message = await modal.onWillDismiss();
      if (message.data === 'success') {
        this.ngOnInit();
      }
      if (message.data) {
        this.presentToast(message.data);
      }
    }
  }
}
