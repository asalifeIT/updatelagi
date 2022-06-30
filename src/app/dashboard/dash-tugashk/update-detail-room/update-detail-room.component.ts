import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AlertController, LoadingController, ModalController } from '@ionic/angular';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-update-detail-room',
  templateUrl: './update-detail-room.component.html',
  styleUrls: ['./update-detail-room.component.scss'],
})
export class UpdateDetailRoomComponent implements OnInit {
  @Input() data: any;
  resultMessage: any;
  verifKamar: FormGroup;

  constructor(
    private modalController: ModalController,
    public loadingController: LoadingController,
    private serviceService: ServiceService,
    private formBuilder: FormBuilder,
    private alertControl: AlertController,
  ) { }

  dismissModal() {
    this.modalController.dismiss(null, 'cancel');
  }

  ngOnInit() {

    this.verifKamar = this.formBuilder.group({
      lantaikamar: new FormControl('false'),
      lantaitoilet: new FormControl('false'),
      lantailangitkamar: new FormControl('false'),
      lantailangitkamarmandi: new FormControl('false'),
      wc: new FormControl('false'),
      wastafel: new FormControl('false'),
      tempattidur: new FormControl('false'),
      sprei: new FormControl('false'),
      selimut: new FormControl('false'),
      ac: new FormControl('false'),
      meja: new FormControl('false'),
      cermin: new FormControl('false'),
      keran: new FormControl('false'),
      shower: new FormControl('false'),
      tempatsampah: new FormControl('false'),
      jendela: new FormControl('false'),
      gorden: new FormControl('false'),
      lemari: new FormControl('false')
    });
  }

  async updateDetailRoom() {
    const loading = await this.loadingController.create({
      message: 'Please wait...'
    });

    if (this.isAnyNullValue(this.verifKamar.value)) {
      await this.presentAlertConfirm(loading);
      return 0;
    }

    await loading.present();
    await this.updateDetailRoomAPi(loading)
  }

  async updateDetailRoomAPi(loading) {
    this.serviceService.updateStatus(this.verifKamar.value, 'task/room-update/', this.data.id).subscribe(
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

  async presentAlertConfirm(loading) {
    const alert = await this.alertControl.create({
      cssClass: 'my-custom-class',
      header: 'Konfirmasi!',
      message: 'Ada komponen yang tidak di ceklis. Tetap lanjutkan?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          },
        },
        {
          text: 'Okay',
          handler: () => {
            loading.present();
            this.updateDetailRoomAPi(loading);
          },
        },
      ],
    });
    await alert.present();
  }

  isAnyNullValue(data) {
    for (const [key, value] of Object.entries(data)) {
      if (value === 'false') {
        return true;
      }
    }
    return false;
  }
}
