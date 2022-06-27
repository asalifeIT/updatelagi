import { Component, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { ServiceService } from 'src/app/services/service.service';


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

  statusInput = new FormControl('', Validators.required);
  picInput = new FormControl('', Validators.required);
  durasiInput = new FormControl('', Validators.required);
  priorityInput = new FormControl('', Validators.required);

  constructor(
    private modalController: ModalController,
    public loadingController: LoadingController,
    private serviceService: ServiceService,

  ) { }

  dismissModal() {
    this.modalController.dismiss(null, 'cancel');
  }

  async updateStatusAndDetail() {
    const loading = await this.loadingController.create({
      message: 'Please wait...'
    });
    await loading.present();

    const payload = {
      'status': (this.statusInput.value) ? this.statusInput.value : this.status,
      'picnrp': (this.picInput.value) ? this.picInput.value : this.pic_nrp,
      'duration': (this.durasiInput.value) ? this.durasiInput.value : this.duration,
      'priority': (this.priorityInput.value) ? this.priorityInput.value : this.priority
    }

    console.log(payload);

    if (payload.picnrp === null || payload.priority === null || payload.duration === null ) {
      this.resultMessage = 'Gagal update data, silakan lengkapi pilihan';
      this.modalController.dismiss(this.resultMessage, 'resultMessage');
      loading.dismiss();
    }

    if (this.statusInput.value === null && this.picInput.value === null && this.durasiInput.value === null && this.priorityInput.value ===null ) {
      this.resultMessage = 'Tidak ada data yang diupdate';
      this.modalController.dismiss(this.resultMessage, 'resultMessage');
      loading.dismiss();
    }

    if (this.statusInput.value === this.status && this.picInput.value === this.picInput && this.durasiInput.value === this.duration && this.priorityInput.value === this.priority ) {
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
}
