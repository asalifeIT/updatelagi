import { Component, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/services/service.service';
import { AlertController, ModalController, LoadingController, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-update-status-and-detail',
  templateUrl: './update-status-and-detail.component.html',
  styleUrls: ['./update-status-and-detail.component.scss'],
})
export class UpdateStatusAndDetailComponent {
  resultMessage: any;
  @Input() id: string;
  @Input() status: string;
  @Input() priority: string;
  @Input() duration: string;
  @Input() pic_nrp: string;
  @Input() usersMt: any;
  
  picInput = new FormControl('', Validators.required);
  durasiInput = new FormControl('', Validators.required);
  priorityInput = new FormControl('', Validators.required);

  constructor(
    private modalController: ModalController,
    public loadingController: LoadingController,
    private serviceService: ServiceService,
    private alertController: AlertController,

  ) { }

  dismissModal() {
    this.modalController.dismiss(null, 'cancel');
  }

  async updateDetail() {
    const loading = await this.loadingController.create({
      message: 'Please wait...'
    });
    await loading.present();

    const payload = {
      'picnrp': (this.picInput.value) ? this.picInput.value : this.pic_nrp,
      'duration': (this.durasiInput.value) ? this.durasiInput.value : this.duration,
      'priority': (this.priorityInput.value) ? this.priorityInput.value : this.priority
    }

    if (payload.picnrp === null || payload.priority === null || payload.duration === null) {
      this.resultMessage = 'Gagal update data, silakan lengkapi pilihan';
      this.modalController.dismiss(this.resultMessage, 'resultMessage');
      loading.dismiss();
    }

    if (this.picInput.value === null && this.durasiInput.value === null && this.priorityInput.value === null) {
      this.resultMessage = 'Tidak ada data yang diupdate';
      this.modalController.dismiss(this.resultMessage, 'resultMessage');
      loading.dismiss();
    }

    if (this.picInput.value === this.picInput && this.durasiInput.value === this.duration && this.priorityInput.value === this.priority) {
      this.resultMessage = 'Tidak ada data yang diupdate';
      this.modalController.dismiss(this.resultMessage, 'resultMessage');
      loading.dismiss();
    }

    this.serviceService.updateStatus(payload, 'maintenance/update-order/', this.id).subscribe(
      data => {
        console.log(data.body);
        this.resultMessage = 'success';

        this.modalController.dismiss(this.resultMessage, 'resultMessage');
        loading.dismiss();
      },
      error => {
        console.log(error.message);
        this.resultMessage = 'Error';
        loading.dismiss();
      }
    );
  }

  async updateStatus(newStatus) {
    const loading = await this.loadingController.create({
      message: 'Please wait...'
    });
    await loading.present();

    const payload = {
      'status': newStatus
    }

    this.serviceService.updateStatus(payload, 'maintenance/update-status-order/', this.id).subscribe(
      data => {
        console.log(data.body);
        this.resultMessage = 'success';

        this.modalController.dismiss(this.resultMessage, 'resultMessage');
        loading.dismiss();
      },
      error => {
        console.log(error.message);
        this.resultMessage = 'Error';
        loading.dismiss();
      }
    );
  }

  async openModalUpdateStatus() {
    let newStatus: string = this.status;
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Ubah Status!',
      message: 'Status sekarang: ' + this.status,
      inputs: [
        {
          name: 'OPEN',
          type: 'radio',
          label: 'OPEN',
          value: 'OPEN',
          handler: () => {
            newStatus = 'OPEN'
          },
          checked: this.status == 'OPEN',
        },
        {
          name: 'PROGRESS',
          type: 'radio',
          label: 'PROGRESS',
          value: 'PROGRESS',
          handler: () => {
            newStatus = 'PROGRESS'
          },
          checked: this.status == 'PROGRESS',
        },
        {
          name: 'HOLD',
          type: 'radio',
          label: 'HOLD',
          value: 'HOLD',
          handler: () => {
            newStatus = 'HOLD'
          },
          checked: this.status == 'HOLD',
        },
        {
          name: 'CLOSED',
          type: 'radio',
          label: 'CLOSED',
          value: 'CLOSED',
          handler: () => {
            newStatus = 'CLOSED'
          },
          checked: this.status == 'CLOSED',
        },
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
            this.updateStatus(newStatus);
          },
        },
      ],
    });
    await alert.present();
  }
}
