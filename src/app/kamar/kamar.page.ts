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
  selector: 'app-kamar',
  templateUrl: './kamar.page.html',
  styleUrls: ['./kamar.page.scss'],
})
export class KamarPage implements OnInit {
  FormKamar:FormGroup;
  authenticationState = new ReplaySubject(); 
  authService: any;
  message:any;
  Username:any;
  DataLogin:any;
  validations = {
     'mess': [
      { type: 'required', message: 'harus di isi' }
    ],
    'nokamar': [
      { type: 'required', message: 'harus di isi' }
    ],
    'lantaikamar': [
      { type: 'required', message: 'harus di isi' }
    ],
    'lantaitoilet': [
      { type: 'required', message: 'harus di isi' }
    ],
    'lantailangitkamar': [
      { type: 'required', message: 'harus di isi' }
    ],
    'lantailangitkamarmand': [
      { type: 'required', message: 'harus di isi' }
    ],
    'wc': [
      { type: 'required', message: 'harus di isi' }
    ],
    'wastafel': [
      { type: 'required', message: 'harus di isi' }
    ],
    'tempattidur': [
      { type: 'required', message: 'harus di isi' }
    ],
    'sprei': [
      { type: 'required', message: 'harus di isi' }
    ],
    'selimut': [
      { type: 'required', message: 'harus di isi' }
    ],
    'ac': [
      { type: 'required', message: 'harus di isi' }
    ],
    'meja': [
      { type: 'required', message: 'harus di isi' }
    ],
    'cermin': [
      { type: 'required', message: 'harus di isi' }
    ],
    'keran': [
      { type: 'required', message: 'harus di isi' }
    ],
    'shower': [
      { type: 'required', message: 'harus di isi' }
    ],
    'tempatsampah': [
      { type: 'required', message: 'harus di isi' }
    ],
    'jendela': [
      { type: 'required', message: 'harus di isi' }
    ],
    'gorden': [
      { type: 'required', message: 'harus di isi' }
    ],
    'lemari': [
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
    let dataStorage=JSON.parse(localStorage.getItem(this.serviceService.TOKEN_KEY));
    // this.Username=dataStorage.data.Username;
    this.serviceService.CekUser().subscribe(
      data => {
        this.DataLogin=data;
        console.log(this.DataLogin)
        this.Username=this.DataLogin.body.name;
      },
      error => {
        console.log("error");
      }
    );


    this.FormKamar=this.formBuilder.group({
      mess:new FormControl('', Validators.compose([
        Validators.required
      ])),
      nokamar:new FormControl('', Validators.compose([
        Validators.required
      ])),
      lantaikamar:new FormControl('', Validators.compose([
        Validators.required
      ])),
      lantaitoilet:new FormControl('', Validators.compose([
        Validators.required
      ])),
      lantailangitkamar:new FormControl('', Validators.compose([
        Validators.required
      ])),
      lantailangitkamarmandi:new FormControl('', Validators.compose([
        Validators.required
      ])),
      wc:new FormControl('', Validators.compose([
        Validators.required
      ])),
      wastafel:new FormControl('', Validators.compose([
        Validators.required
      ])),
      tempattidur:new FormControl('', Validators.compose([
        Validators.required
      ])),
      sprei:new FormControl('', Validators.compose([
        Validators.required
      ])),
      selimut:new FormControl('', Validators.compose([
        Validators.required
      ])),
      ac:new FormControl('', Validators.compose([
        Validators.required
      ])),
      meja:new FormControl('', Validators.compose([
        Validators.required
      ])),
      cermin:new FormControl('', Validators.compose([
        Validators.required
      ])),
      keran:new FormControl('', Validators.compose([
        Validators.required
      ])),
      shower:new FormControl('', Validators.compose([
        Validators.required
      ])),
      tempatsampah:new FormControl('', Validators.compose([
        Validators.required
      ])),
      jendela:new FormControl('', Validators.compose([
        Validators.required
      ])),
      gorden:new FormControl('', Validators.compose([
        Validators.required
      ])),
     lemari:new FormControl('', Validators.compose([
        Validators.required
      ])),
      });
    console.log(this.FormKamar.errors);
  }

  async submitKamar(){
    const loading = await this.loadingController.create({
      message: 'Please wait...'
    });
    await loading.present();
    this.serviceService.submitaduan(this.FormKamar.value, 'task/room-add').subscribe(
      data => {
        this.presentToast("Rincian Tugas Anda Terkirim");
        console.log(this.FormKamar.value);
        this.FormKamar.reset();
        loading.dismiss();
      },
      error => {
        console.log(error);
        this.presentToast("Gagal Terkirim, Silahkan Lengkapi Rincian Tugas!");
        console.log(this.FormKamar.value);
        this.FormKamar.reset();
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
    this.router.navigate(['sub']);
  }
}
