import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, ModalController, LoadingController, ToastController, Platform } from '@ionic/angular';
import { ServiceService } from '../services/service.service';
import { ReplaySubject } from "rxjs/index";
import { UtilService } from 'src/app/services/util.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aduancatering',
  templateUrl: './aduancatering.page.html',
  styleUrls: ['./aduancatering.page.scss'],
})


export class AduancateringPage implements OnInit {
  FormAduanCatering: FormGroup;
  authenticationState = new ReplaySubject();
  authService: any;
  message: any;
  validations = {
    'lokasi': [
      { type: 'required', message: 'lokasi harus diisi.' }
    ],
    'deskripsi': [
      { type: 'required', message: 'deskripsi harus diisi.' }
    ],
    'kritik_saran': [
      { type: 'required', message: 'kritik dan saran harus diisi.' }
    ]
  };

  constructor(
    private formBuilder: FormBuilder,
    private navCtrl: NavController,
    public loadingController: LoadingController,
    public modalController: ModalController,
    private platform: Platform,
    public toastController: ToastController,
    private serviceService: ServiceService,
    private router: Router,
    public util: UtilService
  ) { }

  ngOnInit() {
    this.FormAduanCatering = this.formBuilder.group({
      lokasi: new FormControl('', Validators.compose([
        Validators.required
      ])),
      kritik_saran: new FormControl(''),
      deskripsi: new FormControl('', Validators.compose([
        Validators.required
      ]))
    });
  }

  async submitAduanCatering() {
    const loading = await this.loadingController.create({
      message: 'Please wait...'
    });
    await loading.present();

    if (this.FormAduanCatering.valid) {
      this.serviceService.submitaduan(this.FormAduanCatering.value, 'catering/add').subscribe(
        data => {
          this.presentToast("Terima kasih. Aduan Catering Anda Terkirim");
        },
        error => {
          this.presentToast("Gagal Terkirim, Silahkan kirim aduan lain waktu!");
        }
      );
    }
    else {
      this.presentToast("Silahkan Lengkapi Isi Aduan Catering!");
    }

    this.FormAduanCatering.reset();
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

  // onBack(){
  //   this.router.navigate(['catering']);
  //}

}
