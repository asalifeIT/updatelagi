import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, ModalController, LoadingController, ToastController, Platform } from '@ionic/angular';
import { ServiceService } from '../services/service.service';
import { ReplaySubject } from "rxjs";
import { catchError } from 'rxjs/operators';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-ratingcatering',
  templateUrl: './ratingcatering.page.html',
  styleUrls: ['./ratingcatering.page.scss'],
})
export class RatingcateringPage implements OnInit {
  FormRatingCatering: FormGroup;
  authenticationState = new ReplaySubject();
  authService: any;
  message: any;
  validations = {
    'jenis': [
      { type: 'required', message: 'pilihan harus di isi' }
    ],
    'nilai1': [
      { type: 'required', message: 'pilihan harus di isi' }
    ],
    'nilai2': [
      { type: 'required', message: 'pilihan harus di isi' }
    ],
    'nilai3': [
      { type: 'required', message: 'pilihan harus di isi' }
    ],
    'nilai4': [
      { type: 'required', message: 'pilihan harus di isi' }
    ],
    'nilai5': [
      { type: 'required', message: 'pilihan harus di isi' }
    ],
    'nilai6': [
      { type: 'required', message: 'pilihan harus di isi' }
    ],
    'nilai7': [
      { type: 'required', message: 'pilihan harus di isi' }
    ],
    'opt08': [
      { type: 'required', message: 'pilihan harus di isi' }
    ],
    'saran': [
      { type: 'required', message: 'kritik dan saran harus isi' }
    ],

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
    this.FormRatingCatering = this.formBuilder.group({
      jenis: new FormControl('', Validators.compose([
        Validators.required
      ])),
      nilai1: new FormControl('', Validators.compose([
        Validators.required
      ])),
      nilai2: new FormControl('', Validators.compose([
        Validators.required
      ])),
      nilai3: new FormControl('', Validators.compose([
        Validators.required
      ])),
      nilai4: new FormControl('', Validators.compose([
        Validators.required
      ])),
      nilai5: new FormControl('', Validators.compose([
        Validators.required
      ])),
      nilai6: new FormControl('', Validators.compose([
        Validators.required
      ])),
      nilai7: new FormControl('', Validators.compose([
        Validators.required
      ])),
      nilai8: new FormControl('', Validators.compose([
        Validators.required
      ])),
      waktu: new FormControl('', Validators.compose([
        Validators.required
      ])),
      saran: new FormControl(''),
    });
  }

  async submitRatingcatering() {
    const loading = await this.loadingController.create({
      message: 'Please wait...'
    });
    await loading.present();

    if (this.FormRatingCatering.valid) {
      this.serviceService.submitaduan(this.FormRatingCatering.value, 'catering/rating-catering-many').subscribe(
        data => {
          this.presentToast("Terima Kasih. Hasil Rating Anda Terkirim");
        },
        error => {
          console.log(error);
          this.presentToast("Gagal Terkirim, Silahkan kirim rating catering lain waktu!");
        }
      );
    }
    else {
      this.presentToast("Silahkan Lengkapi Form Rating!");
    }
    this.FormRatingCatering.reset();
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
    this.router.navigate(['catering']);
  }
}
