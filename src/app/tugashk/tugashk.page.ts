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
  selector: 'app-tugashk',
  templateUrl: './tugashk.page.html',
  styleUrls: ['./tugashk.page.scss'],
})
export class TugashkPage implements OnInit {
  FormTugasHk:FormGroup;
  authenticationState = new ReplaySubject(); 
  authService: any;
  message:any;
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
  this.FormTugasHk = this.formBuilder.group({
    mess:new FormControl('', Validators.compose([
      Validators.required
    ])),
    no_kamar:new FormControl('', Validators.compose([
      Validators.required
    ])),
    });
  console.log(this.FormTugasHk.errors);
}

async onsubmitTugasHk(){
  const loading = await this.loadingController.create({
    message: 'Please wait...'

  });
  await loading.present();
  this.serviceService.submitaduan(this.FormTugasHk.value,'housekeeping/record-add').subscribe(
    data => {
      this.presentToast("Terimakasih Tugas Anda Terkirim");
      console.log(this.FormTugasHk.value);
      this.FormTugasHk.reset();
      loading.dismiss();


    },
    error => {
    console.log(error);
     this.presentToast("Tugas Gagal Terkirim!");
      console.log(this.FormTugasHk.value);
      this.FormTugasHk.reset();
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
    this.router.navigate(['home']);
  }


}
