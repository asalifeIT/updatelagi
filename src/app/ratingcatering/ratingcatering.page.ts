import { ServiceService } from './../services/service.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators, ReactiveFormsModule,FormArray, AbstractControl } from '@angular/forms';
import { NavController, ModalController, LoadingController, ToastController,Platform } from '@ionic/angular';
import { RegisterPage } from '../register/register.page';
import {Observable, ReplaySubject, throwError} from "rxjs/index";
import { catchError } from 'rxjs/operators';
import { UtilService } from 'src/app/services/util.service';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';



@Component({
  selector: 'app-ratingcatering',
  templateUrl: './ratingcatering.page.html',
  styleUrls: ['./ratingcatering.page.scss'],
})
export class RatingcateringPage implements OnInit {

 DataRecord:any;
 FormRatingCatering:FormGroup;
 authenticationState = new ReplaySubject(); 
 authService: any;
 message:any;
 opt:FormControl;
 validations = {
   'opt':[{ type: 'required', message: 'pilihan harus dipilih' }],
   'kritik':[{ type: '', message: 'pilihan harus dipilih' }]

};



constructor(
  private serviceService:ServiceService,
  private formBuilder: FormBuilder, 
    private navCtrl: NavController, 
    public loadingController: LoadingController,
    public modalController: ModalController,
    private platform: Platform,
    public toastController: ToastController,
    private router: Router,
    public util: UtilService


){}



ngOnInit(){
    this.serviceService.getRecord("catering/pertanyaan").subscribe(
      data => {
        this.DataRecord=data.body;
        console.log(this.DataRecord);
        },
        error => {
        console.log("err", error);
        }
      );
      this.FormRatingCatering=this.formBuilder.group({
        opt:new FormControl('required', Validators.required),
        kritik:new FormControl('', Validators.compose([Validators.required]))});
       }


    async onSubmitRating(){
      const loading = await this.loadingController.create({
        message: 'Please wait...'

      });
      await loading.present();
      this.serviceService.submitaduan(this.FormRatingCatering.value,'catering/rating-catering-addbulk').subscribe(
        data => {
          this.presentToast("Terimakasih Rating Anda Terkirim");
          console.log(this.FormRatingCatering.value);
          this.FormRatingCatering.reset();
          loading.dismiss();


        },
        error => {
        console.log(error);
         this.presentToast("Gagal Terkirim Rating Catering!");
          console.log(this.FormRatingCatering.value);
          this.FormRatingCatering.reset();
          loading.dismiss();


        }

      );
     }
     async presentToast(Message) {
      const toast = await this.toastController.create({
        message: Message,
        duration: 2500,
        position: "bottom"
      });
      toast.present();
    }
  
    onBack() {
      this.router.navigate(['home']);
    }
  }

