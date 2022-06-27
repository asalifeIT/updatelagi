import { Component, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { ServiceService } from 'src/app/services/service.service';


@Component({
  selector: 'app-update-status',
  templateUrl: './update-status.component.html',
  styleUrls: ['./update-status.component.scss'],
})
export class UpdateStatusComponent {
  resultMessage: any;
  @Input() status: string;
  @Input() id: string;

  statusInput = new FormControl('', Validators.required);

  constructor(
    private modalController: ModalController,
    public loadingController: LoadingController,
    private serviceService: ServiceService,

  ) { }

  dismissModal() {
    this.modalController.dismiss(null, 'cancel');
  }

  async updateStatus() {
    const loading = await this.loadingController.create({
      message: 'Please wait...'
    });
    await loading.present();

    const payload = {
      'status': this.statusInput.value
    }

    if (payload.status === this.status) {
      this.resultMessage = 'success';
      this.modalController.dismiss(this.resultMessage, 'resultMessage');
      loading.dismiss();
    }

    this.serviceService.updateStatus(payload, 'housekeeping/update/', this.id).subscribe(
      data => {
        console.log(data.body);
        this.resultMessage = 'success';
        loading.dismiss();

        this.modalController.dismiss(this.resultMessage, 'resultMessage');
      },
      error => {
        console.log(error.message);
        this.resultMessage = 'Error';
        loading.dismiss();
      }
    );
  }

}
