import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { NavController, ModalController, LoadingController, ToastController,Platform } from '@ionic/angular';
import { RegisterPage } from '../register/register.page';
import { ServiceService } from '../services/service.service';
import {Observable, ReplaySubject, throwError} from "rxjs/index";
import { catchError } from 'rxjs/operators';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-aduanmaintenance',
  templateUrl: './aduanmaintenance.page.html',
  styleUrls: ['./aduanmaintenance.page.scss'],
})
export class AduanmaintenancePage implements OnInit {
  FormAduanMain:FormGroup;
  authenticationState = new ReplaySubject(); 
  authService: any;
  message:any;
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
    this.FormAduanMain=this.formBuilder.group({
      lokasi:new FormControl('', Validators.compose([
        Validators.required
      ])),
      jenisaduan:new FormControl('', Validators.compose([
        Validators.required
      ]))
    });

  }

  async submitAdMain(){
    const loading = await this.loadingController.create({
      message: 'Please wait...'
    });
    await loading.present();

    this.serviceService.submitaduan(this.FormAduanMain.value, 'maintenance/add').subscribe(
      data => {
        this.presentToast("Aduan Maintenance Anda Terkirim");
        console.log(this.FormAduanMain.value);
        this.FormAduanMain.reset();
        loading.dismiss();
      },
         error => {
          console.log(error);
          this.presentToast("Gagal Terkirim, Silahkan Lengkapi Isi Aduan Maintenance");
          console.log(this.FormAduanMain.value);
          this.FormAduanMain.reset();
          loading.dismiss();
      }
    );
  }

  async presentToast(Message) {
    const toast = await this.toastController.create({
      message: Message,
      duration: 2500,
      position:"top"
    });
    toast.present();
  }
  onBack() {
    this.router.navigate(['home']);
  }


  }