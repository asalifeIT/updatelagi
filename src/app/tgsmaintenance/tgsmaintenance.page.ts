import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, ModalController, LoadingController, ToastController, Platform } from '@ionic/angular';
import { ServiceService } from '../services/service.service';
import { ReplaySubject } from "rxjs/index";
import { catchError } from 'rxjs/operators';
import { UtilService } from 'src/app/services/util.service';
@Component({
  selector: 'app-tgsmaintenance',
  templateUrl: './tgsmaintenance.page.html',
  styleUrls: ['./tgsmaintenance.page.scss'],
})
export class TgsmaintenancePage implements OnInit {
  FormTgsM: FormGroup;
  authenticationState = new ReplaySubject();
  authService: any;
  message: any;
  validations = {
    'jenisaset': [
      { type: 'required', message: 'aset harus di isi' }
    ],
    'lokasiaset': [
      { type: 'required', message: 'lokasi aset harus di isi' }
    ],
    'keterangan': [
      { type: 'required', message: 'keterangan harus diisi.' }
    ],
    'status': [
      { type: 'required', message: 'status harus diisi.' }
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
    this.FormTgsM = this.formBuilder.group({
      jenisaset: new FormControl('', Validators.compose([
        Validators.required
      ])),
      lokasiaset: new FormControl('', Validators.compose([
        Validators.required
      ])),
      keterangan: new FormControl('', Validators.compose([
        Validators.required
      ])),
      status: new FormControl(''),
    });
  }

  async submitTgsM() {
    const loading = await this.loadingController.create({
      message: 'Please wait...'
    });
    await loading.present();

    if (this.FormTgsM.valid) {
      this.serviceService.submitaduan(this.FormTgsM.value, 'maintenance/task-add').subscribe(
        data => {
          this.presentToast("Tugas Maintenance Anda Terkirim");
        },
        error => {
          this.presentToast("Gagal Terkirim, Silahkan kirim tugas housekeeping lain waktu!");
        }
      );
    } 
    else {
      this.presentToast("Silahkan Lengkapi Isi Tugas Maintenance!");
    }

    this.FormTgsM.reset();
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
    this.router.navigate(['maintenance']);
  }
}
