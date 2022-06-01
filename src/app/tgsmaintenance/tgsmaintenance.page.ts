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
  selector: 'app-tgsmaintenance',
  templateUrl: './tgsmaintenance.page.html',
  styleUrls: ['./tgsmaintenance.page.scss'],
})
export class TgsmaintenancePage implements OnInit {
  FormTgsM:FormGroup;
  authenticationState = new ReplaySubject(); 
  authService: any;
  message:any;
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
    this.FormTgsM=this.formBuilder.group({
      jenisaset:new FormControl('', Validators.compose([
        Validators.required
      ])),
      lokasiaset:new FormControl('', Validators.compose([
        Validators.required
      ])),
      keterangan:new FormControl('', Validators.compose([
        Validators.required
      ])),
      status:new FormControl('', Validators.compose([
        Validators.required
      ])),
    });
    console.log(this.FormTgsM.errors);
  }

  async submitTgsM(){
    const loading = await this.loadingController.create({
      message: 'Please wait...'
    });
    await loading.present();
    this.serviceService.submitaduan(this.FormTgsM.value, 'maintenance/task-add').subscribe(
      data => {
        this.presentToast("Tugas Maintenance Anda Terkirim");
        console.log(this.FormTgsM.value);
        this.FormTgsM.reset();
        loading.dismiss();
      },
      error => {
        console.log(error);
        this.presentToast("Gagal Terkirim, Silahkan Lengkapi Isi Tugas Maintenance!");
        console.log(this.FormTgsM.value);
        this.FormTgsM.reset();
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
