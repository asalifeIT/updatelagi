import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoadingController, ModalController } from '@ionic/angular';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-update-detail-room',
  templateUrl: './update-detail-room.component.html',
  styleUrls: ['./update-detail-room.component.scss'],
})
export class UpdateDetailRoomComponent implements OnInit{
  @Input() data: any;
  resultMessage: any;
  verifKamar: FormGroup;

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
    await loading.present();

    console.log(this.verifKamar.value);

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
