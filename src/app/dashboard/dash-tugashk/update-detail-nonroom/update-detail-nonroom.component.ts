import { Component, Input, OnInit } from '@angular/core';
<<<<<<< HEAD
import { LoadingController, ModalController, ToastController, Platform  } from '@ionic/angular';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
=======
import { AlertController, LoadingController, ModalController } from '@ionic/angular';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
>>>>>>> 8f396adbcaac91ea88b3ed51f50fb5c4fbd79562
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-update-detail-nonroom',
  templateUrl: './update-detail-nonroom.component.html',
  styleUrls: ['./update-detail-nonroom.component.scss'],
})
export class UpdateDetailNonroomComponent implements OnInit {
  @Input() data: any;
  resultMessage: any;
  verifNonKamar: FormGroup;

  constructor(
    private modalController: ModalController,
    public loadingController: LoadingController,
    private serviceService: ServiceService,
    private formBuilder: FormBuilder,
<<<<<<< HEAD
    public toastController: ToastController,
    private platform: Platform
=======
    private alertControl: AlertController,
>>>>>>> 8f396adbcaac91ea88b3ed51f50fb5c4fbd79562
  ) { }

  dismissModal() {
    this.modalController.dismiss(null, 'cancel');
  }

  ngOnInit() {

    this.verifNonKamar = this.formBuilder.group({
      ruangtvkacajendelakusen: new FormControl('false'),
      ruangtvcermin: new FormControl('false'),
      ruangtvdispenser: new FormControl('false'),
      ruangtvac: new FormControl('false'),
      ruangtvfurniture: new FormControl('false'),
      ruangtvraktv: new FormControl('false'),
      ruangtvtiraikarpet: new FormControl('false'),
      ruangtvdinding: new FormControl('false'),
      ruangtvlantai: new FormControl('false'),
      koridortempatsampah: new FormControl('false'),
      koridorpintu: new FormControl('false'),
      koridorlantaisudutlantai: new FormControl('false'),
      koridorkeset: new FormControl('false'),
      koridorpantry: new FormControl('false'),
      koridorwastafelchromefixture: new FormControl('false'),
      koridorperalatanmakanrakpiring: new FormControl('false'),
      koridorpintudinding: new FormControl('false'),
      koridorkancajendelakusen: new FormControl('false'),
      toiletpintudinding: new FormControl('false'),
      toilettempatsampah: new FormControl('false'),
      toiletwastafelchromefixture: new FormControl('false'),
      toileturinoirselangtoiletbowl: new FormControl('false'),
      toiletshowerareacurtain: new FormControl('false'),
      toiletlantaisudutlantai: new FormControl('false'),
      toiletteras: new FormControl('false')
    });
  }

  async updateDetailNonRoom() {
    const loading = await this.loadingController.create({
      message: 'Please wait...'
    });

    if (this.isAnyNullValue(this.verifNonKamar.value)) {
      await this.presentAlertConfirm(loading);
      return 0;
    }

    await loading.present();
<<<<<<< HEAD
    console.log(this.verifNonKamar.value);
    loading.dismiss();
    
    // this.serviceService.updateStatus(payload, 'catering/update-status/', this.data.id).subscribe(
    //   data => {
    //     console.log(data.body);
    //     this.resultMessage = 'success';

    //     this.modalController.dismiss(this.resultMessage, 'resultMessage');
    //     loading.dismiss();
    //   },
    //   error => {
    //     console.log(error.message);
    //     this.resultMessage = 'Error';
    //     loading.dismiss();
    //   }
    // );
  }


  refresh(): void {
    window.location.reload();
  }


=======
    await this.updateDetailNonRoomAPi(loading)
  }

  async updateDetailNonRoomAPi(loading) {
    this.serviceService.updateStatus(this.verifNonKamar.value, 'task/mess-update/', this.data.id).subscribe(
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
            this.updateDetailNonRoomAPi(loading);
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
>>>>>>> 8f396adbcaac91ea88b3ed51f50fb5c4fbd79562
}
