import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, ModalController, LoadingController, ToastController, Platform } from '@ionic/angular';
import { ServiceService } from '../services/service.service';
import { ReplaySubject } from "rxjs/index";
import { catchError } from 'rxjs/operators';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-aduanmaintenance',
  templateUrl: './aduanmaintenance.page.html',
  styleUrls: ['./aduanmaintenance.page.scss'],
})
export class AduanmaintenancePage implements OnInit {
  FormAduanMain: FormGroup;
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
    this.FormAduanMain = this.formBuilder.group({
      lokasi: new FormControl('', Validators.compose([
        Validators.required
      ])),
      jenisaduan: new FormControl('', Validators.compose([
        Validators.required
      ]))
    });

  }

  async submitAdMain() {
    const loading = await this.loadingController.create({
      message: 'Please wait...'
    });
    await loading.present();

    if (this.FormAduanMain.valid) {
      this.serviceService.submitaduan(this.FormAduanMain.value, 'maintenance/add').subscribe(
        data => {
          this.presentToast("Aduan Maintenance Anda Terkirim");
        },
        error => {
          this.presentToast("Gagal Terkirim, Silahkan kirim aduan lain waktu");
        }
      );
    }
    else {
      this.presentToast("Silahkan Lengkapi Isi Aduan Maintenance!");
    }

    this.FormAduanMain.reset();
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
    this.router.navigate(['infomaintan']);
  }
}