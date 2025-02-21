import { ServiceService } from 'src/app/services/service.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AlertController,  ModalController, LoadingController, ToastController } from '@ionic/angular';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-dash-tugasmt',
  templateUrl: './dash-tugasmt.page.html',
  styleUrls: ['./dash-tugasmt.page.scss'],
})
export class DashTugasmtPage implements OnInit {
  [x: string]: any;
  message: any;
  Data: any;
  DataLogin: any;
  DataRecord: any;

  constructor(
    public serviceService: ServiceService,
    public loadingController: LoadingController,
    public modalController: ModalController,
    public toastController: ToastController,
    private router: Router,
    public util: UtilService,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    this.getUser();
    this.getRecordMaintenance();
  }

  getUser() {
    this.Username = this.serviceService.getUserName();
  }

  getRecordMaintenance() {
    this.serviceService.getRecord('maintenance/task').subscribe(
      data => {
        this.DataRecord = data.body;
      },
      error => {
        console.log("err", error);
      }
    );
  }

  async updateTask(id: string, status: string, statusInit: string) {
    const loading = await this.loadingController.create({
      message: 'Please wait...'
    });
    await loading.present();

    const payload = { 'status': status }

    if (status === statusInit) {
      this.presentToast("Edit Status Aduan Catering Sukses")
    } 
    else {
      this.serviceService.updateStatus(payload, 'maintenance/task-update/', id).subscribe(
        data => {
          this.presentToast("Edit Status Aduan Catering Sukses")
          this.ngOnInit();
        },
        error => {
          this.presentToast("Edit Status Aduan Catering Gagal");
          console.log(error.message)
        }
      );
    }
    loading.dismiss();
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
    let status: string = data.status;
    if (this.serviceService.isHasAccess('HOUSEKEEPING', 'COMPLAINT', 'EDIT')) {
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Ubah Status!',
        message: 'Status sekarang: ' + data.status,
        inputs: [
          {
            name: 'RUSAK',
            type: 'radio',
            label: 'RUSAK',
            value: 'RUSAK',
            handler: () => {
              status = 'RUSAK'
            },
            checked: data.status == 'RUSAK',
          },
          {
            name: 'BAGUS',
            type: 'radio',
            label: 'BAGUS',
            value: 'BAGUS',
            handler: () => {
              status = 'BAGUS'
            },
            checked: data.status == 'BAGUS',
          }
        ],
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
            },
          },
          {
            text: 'Ok',
            handler: () => {
              this.updateTask(data.id, status, data.status);
            },
          },
        ],
      });
      await alert.present();
    }
  }
}