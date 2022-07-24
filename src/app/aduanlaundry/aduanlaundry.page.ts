import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, ModalController, LoadingController, ToastController, Platform } from '@ionic/angular';
import { ServiceService } from '../services/service.service';
import { ReplaySubject } from "rxjs";
import { catchError } from 'rxjs/operators';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-aduanlaundry',
  templateUrl: './aduanlaundry.page.html',
  styleUrls: ['./aduanlaundry.page.scss'],
})
export class AduanlaundryPage implements OnInit {
  FormAduanLaundry: FormGroup;
  authenticationState = new ReplaySubject();
  authService: any;
  message: any;
  validations = {
    'mess': [
      { type: 'required', message: 'pilihan mess harus di isi' }
    ],
    'no_kamar': [
      { type: 'required', message: 'nomor kamar harus di isi' }
    ],
    'jenis_pakaian': [
      { type: 'required', message: 'jenis pakaian harus diisi.' }
    ],
    'jenis_deviasi': [
      { type: 'required', message: 'jenis deviasi harus diisi.' }
    ],
    'tanggal_laundry': [
      { type: 'required', message: 'pilihan tanggal harus diisi.' }
    ]
  };

  constructor(
    private formBuilder: FormBuilder,
    private navCtrl: NavController,
    public loadingController: LoadingController,
    public modalController: ModalController,
    private platform: Platform,
    public toastController: ToastController,
    public serviceService: ServiceService,
    private router: Router,
    public util: UtilService
  ) { }

  ngOnInit() {
    this.FormAduanLaundry = this.formBuilder.group({
      mess: new FormControl('', Validators.compose([
        Validators.required
      ])),
      no_kamar: new FormControl('', Validators.compose([
        Validators.required
      ])),
      jenis_pakaian: new FormControl('', Validators.compose([
        Validators.required
      ])),
      jenis_deviasi: new FormControl('', Validators.compose([
        Validators.required
      ])),
      tanggal_loundry: new FormControl('', Validators.compose([
        Validators.required
      ])),
    });
  }

  async submitAduanLaundry() {
    const loading = await this.loadingController.create({
      message: 'Please wait...'
    });
    await loading.present();

    if (this.FormAduanLaundry.valid) {
      this.serviceService.submitaduan(this.FormAduanLaundry.value, 'laundry/add').subscribe(
        data => {
          this.presentToast("Aduan Laundry Anda Terkirim");
        },
        error => {
          this.presentToast("Gagal Terkirim, Silahkan kirim aduan lain waktu!");
        }
      );
    }
    else {
      this.presentToast("Silahkan Lengkapi Isi Aduan Laundry!");
    }
    this.FormAduanLaundry.reset();
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
    this.router.navigate(['infolaundry']);
  }
}
