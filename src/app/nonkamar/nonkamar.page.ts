import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { NavController, ModalController, LoadingController, ToastController,Platform } from '@ionic/angular';
import { RegisterPage } from '../register/register.page';
import { ServiceService } from '../services/service.service';
import {Observable, ReplaySubject, throwError} from "rxjs/index";
import { catchError } from 'rxjs/operators';
import { UtilService } from 'src/app/services/util.service';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-nonkamar',
  templateUrl: './nonkamar.page.html',
  styleUrls: ['./nonkamar.page.scss'],
})
export class NonkamarPage implements OnInit {
  FormNonKamar:FormGroup;
  authenticationState = new ReplaySubject(); 
  authService: any;
  message:any;
  validations = {
     'mess': [
      { type: 'required', message: 'harus di isi' }
    ],
    'ruangtvkacajendelakusen': [
      { type: 'required', message: 'harus di isi' }
    ],
    'ruangtvcermin': [
      { type: 'required', message: 'harus di isi' }
    ],
    'ruangtvdispenser': [
      { type: 'required', message: 'harus di isi' }
    ],
    'ruangtvac': [
      { type: 'required', message: 'harus di isi' }
    ],
    'ruangtvfurniture': [
      { type: 'required', message: 'harus di isi' }
    ],
    'ruangtvraktv': [
      { type: 'required', message: 'harus di isi' }
    ],
    'ruangtvtiraikarpet': [
      { type: 'required', message: 'harus di isi' }
    ],
    'ruangtvdinding': [
      { type: 'required', message: 'harus di isi' }
    ],
    'ruangtvlantai': [
      { type: 'required', message: 'harus di isi' }
    ],
    'koridortempatsampah': [
      { type: 'required', message: 'harus di isi' }
    ],
    'koridorpintu': [
      { type: 'required', message: 'harus di isi' }
    ],
    'koridorlantaisudutlantai': [
      { type: 'required', message: 'harus di isi' }
    ],
    'koridorkeset': [
      { type: 'required', message: 'harus di isi' }
    ],
    'koridorpantry': [
      { type: 'required', message: 'harus di isi' }
    ],
    'koridorwastafelchromefixture': [
      { type: 'required', message: 'harus di isi' }
    ],
    'koridorperalatanmakanrakpiring': [
      { type: 'required', message: 'harus di isi' }
    ],
    'koridorpintudinding': [
      { type: 'required', message: 'harus di isi' }
    ],
    'koridorkancajendelakusen': [
      { type: 'required', message: 'harus di isi' }
    ],
    'toiletpintudinding': [
      { type: 'required', message: 'harus di isi' }
    ],
    'toilettempatsampah': [
      { type: 'required', message: 'harus di isi' }
    ],
    'toiletwastafelchromefixture': [
      { type: 'required', message: 'harus di isi' }
    ],
    'toileturinoirselangtoiletbowl': [
      { type: 'required', message: 'harus di isi' }
    ],
    'toiletshowerareacurtain': [
      { type: 'required', message: 'harus di isi' }
    ],
    'toiletlantaisudutlantai': [
      { type: 'required', message: 'harus di isi' }
    ],
    'toiletteras': [
      { type: 'required', message: 'harus di isi' }
    ]
   };

   DataRecord: Object;

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

    this.FormNonKamar=this.formBuilder.group({
      mess:new FormControl('', Validators.compose([
        Validators.required
      ])),
      ruangtvkacajendelakusen:new FormControl('', Validators.compose([
        Validators.required
      ])),
      ruangtvcermin:new FormControl('', Validators.compose([
        Validators.required
      ])),
      ruangtvdispenser:new FormControl('', Validators.compose([
        Validators.required
      ])),
      ruangtvac:new FormControl('', Validators.compose([
        Validators.required
      ])),
      ruangtvfurniture:new FormControl('', Validators.compose([
        Validators.required
      ])),
      ruangtvraktv:new FormControl('', Validators.compose([
        Validators.required
      ])),
      ruangtvtiraikarpet:new FormControl('', Validators.compose([
        Validators.required
      ])),
      ruangtvdinding:new FormControl('', Validators.compose([
        Validators.required
      ])),
      ruangtvlantai:new FormControl('', Validators.compose([
        Validators.required
      ])),
      koridortempatsampah:new FormControl('', Validators.compose([
        Validators.required
      ])),
      koridorpintu:new FormControl('', Validators.compose([
        Validators.required
      ])),
      koridorlantaisudutlantai:new FormControl('', Validators.compose([
        Validators.required
      ])),
      koridorkeset:new FormControl('', Validators.compose([
        Validators.required
      ])),
      koridorpantry:new FormControl('', Validators.compose([
        Validators.required
      ])),
      koridorwastafelchromefixture:new FormControl('', Validators.compose([
        Validators.required
      ])),
      koridorperalatanmakanrakpiring:new FormControl('', Validators.compose([
        Validators.required
      ])),
      koridorpintudinding:new FormControl('', Validators.compose([
        Validators.required
      ])),
      koridorkancajendelakusen:new FormControl('', Validators.compose([
        Validators.required
      ])),
      toiletpintudinding:new FormControl('', Validators.compose([
        Validators.required
      ])),
      toilettempatsampah:new FormControl('', Validators.compose([
        Validators.required
      ])),
      toiletwastafelchromefixture:new FormControl('', Validators.compose([
        Validators.required
      ])),
      toileturinoirselangtoiletbowl:new FormControl('', Validators.compose([
        Validators.required
      ])),
      toiletshowerareacurtain:new FormControl('', Validators.compose([
        Validators.required
      ])),
      toiletlantaisudutlantai:new FormControl('', Validators.compose([
        Validators.required
      ])),
      toiletteras:new FormControl('', Validators.compose([
        Validators.required
      ])),
      });
    console.log(this.FormNonKamar.errors);
  }

  async submitNonKamar(){
    const loading = await this.loadingController.create({
      message: 'Please wait...'
    });
    await loading.present();
    this.serviceService.submitaduan(this.FormNonKamar.value, 'task/mess-add').subscribe(
      data => {
        this.presentToast("Rincian Tugas Anda Terkirim");
        console.log(this.FormNonKamar.value);
        this.FormNonKamar.reset();
        loading.dismiss();
      },
      error => {
        console.log(error);
        this.presentToast("Gagal Terkirim, Silahkan Lengkapi Rincian Tugas!");
        console.log(this.FormNonKamar.value);
        this.FormNonKamar.reset();
        loading.dismiss();
      }

    );
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
    this.router.navigate(['housekeeping']);
  }
}
