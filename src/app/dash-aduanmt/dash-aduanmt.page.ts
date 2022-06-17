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
  selector: 'app-dash-aduanmt',
  templateUrl: './dash-aduanmt.page.html',
  styleUrls: ['./dash-aduanmt.page.scss'],
})
export class DashAduanmtPage implements OnInit {
  [x: string]: any; 
  Data:any;
  DataLogin:any;
  DataResponse:any;
  DataCheckLogin:any;
  DataRecord: any;  
  constructor(
    private serviceService:ServiceService,
    private navCtrl: NavController, 
      public loadingController: LoadingController,
      public modalController: ModalController,
      private platform: Platform,
      public toastController: ToastController,
      private router: Router,
      public util: UtilService
  ) { }

  ngOnInit() {
    this.serviceService.getRecord('maintenance/my').subscribe(
      data => {
        this.DataRecord=data.body;
        localStorage.getItem(JSON.stringify(this.DataRecord));
        console.log(this.DataRecord);
        },
        error => {
        console.log("err", error);
        }
      );
      let dataStorage=JSON.parse(localStorage.getItem(this.serviceService.TOKEN_KEY));
      // this.Username=dataStorage.data.Username;
      this.serviceService.CekUser().subscribe(
        data => {
          this.DataLogin=data;
          console.log(this.DataLogin)
          this.Username=this.DataLogin.body.name;
          localStorage.getItem(JSON.parse(localStorage.getItem("role")));
        },
        error => {
          console.log("error");
        }
      );
  }

    signout(){
    this.router.navigate(['dashboard']);
  }
   
   ngOnDestroy() {
    if (typeof this.routerEvents !== 'undefined') this.routerEvents.unsubscribe();
  }


}
