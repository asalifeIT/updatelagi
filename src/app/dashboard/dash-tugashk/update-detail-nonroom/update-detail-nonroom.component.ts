import { Component, Input, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
    await loading.present();

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

}
