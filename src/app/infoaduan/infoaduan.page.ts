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
  selector: 'app-infoaduan',
  templateUrl: './infoaduan.page.html',
  styleUrls: ['./infoaduan.page.scss'],
})
export class InfoaduanPage implements OnInit {
  [x: string]: any;
 DataRecord:any;
 FormInfo:FormGroup;
 authService: any;
 message:any;
  aduan: any[1] = [
    {id: 1, name: '', src: '', background: '', page: ''},
     ];


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
    this.serviceService.getRecord('catering/all').subscribe(
      data => {
        this.DataRecord=data.body;
        console.log(this.DataRecord);
        },
        error => {
        console.log("err", error);
        }
      );
  }

  

  onBack() {
    this.router.navigate(['home']);
  }

  openAdcatering() {
    this.router.navigate(['aduancatering']);
    }

}
