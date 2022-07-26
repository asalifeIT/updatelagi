import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController, LoadingController, ToastController } from '@ionic/angular';
import { ServiceService } from '../services/service.service';
import { ReplaySubject } from "rxjs";
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-tugashk',
  templateUrl: './tugashk.page.html',
  styleUrls: ['./tugashk.page.scss'],
})
export class TugashkPage implements OnInit {
  FrmTgshk: FormGroup;
  authenticationState = new ReplaySubject();
  authService: any;
  message: any;
  validations = {
    'mess': [
      { type: 'required', message: 'pilihan mess harus di isi' }
    ],
    'no_kamar': [
      { type: 'required', message: 'nomor kamar harus di isi' }
    ]
  };

  DataRecord: Object;

  constructor(
    private formBuilder: FormBuilder,
    public loadingController: LoadingController,
    public modalController: ModalController,
    public toastController: ToastController,
    public serviceService: ServiceService,
    private router: Router,
    public util: UtilService
  ) { }

  ngOnInit() {
    this.FrmTgshk = this.formBuilder.group({
      mess: new FormControl('', Validators.compose([
        Validators.required
      ])),
      no_kamar: new FormControl('', Validators.compose([
        Validators.required
      ])),
    });
  }

  async onsubmitTgshk() {
    const loading = await this.loadingController.create({
      message: 'Please wait...'

    });
    await loading.present();
    this.serviceService.submitaduan(this.FrmTgshk.value, 'housekeeping/record-add').subscribe(
      data => {
        this.presentToast("Terimakasih Tugas Anda Terkirim");
      },
      error => {
        this.presentToast("Tugas Gagal Terkirim!");
      }
    );
    this.FrmTgshk.reset();
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
    this.router.navigate(['home']);
  }
}
