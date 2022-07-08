import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, ModalController, LoadingController, ToastController, Platform } from '@ionic/angular';
import { ServiceService } from '../services/service.service';
import { ReplaySubject, throwError } from "rxjs/index";
import { catchError } from 'rxjs/operators';
import { UtilService } from 'src/app/services/util.service';


@Component({
  selector: 'app-aduanhk',
  templateUrl: './aduanhk.page.html',
  styleUrls: ['./aduanhk.page.scss'],
})
export class AduanhkPage implements OnInit {
  FormAduanHk: FormGroup;
  authenticationState = new ReplaySubject();
  authService: any;
  message: any;
  validations = {
    'lokasi': [
      { type: 'required', message: 'lokasi harus diisi.' }
    ],
    'deskripsi': [
      { type: 'required', message: 'deskripsi harus diisi.' }
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
    this.FormAduanHk = this.formBuilder.group({
      lokasi: new FormControl('', Validators.compose([
        Validators.required
      ])),
      deskripsi: new FormControl('', Validators.compose([
        Validators.required
      ]))
    });

  }

  async submitAduanHk() {
    const loading = await this.loadingController.create({
      message: 'Please wait...'
    });
    await loading.present();

    if (this.FormAduanHk.valid) {
      this.serviceService.submitaduan(this.FormAduanHk.value, 'housekeeping/add').subscribe(
        data => {
          this.presentToast("Aduan House Keeping Anda Terkirim");
        },
        error => {
          this.presentToast("Gagal Terkirim, Silahkan kirim aduan lain waktu!");
        }
      );
    }
    else {
      this.presentToast("Silahkan Lengkapi Isi Aduan Housekeeping!");
    }

    this.FormAduanHk.reset();
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
    this.router.navigate(['infohk']);
  }


}


