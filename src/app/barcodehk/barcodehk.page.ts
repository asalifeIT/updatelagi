import { ServiceService } from './../services/service.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators, ReactiveFormsModule,FormArray, AbstractControl } from '@angular/forms';
import { NavController, ModalController, LoadingController, ToastController,Platform } from '@ionic/angular';
import { RegisterPage } from '../register/register.page';
import {Observable, ReplaySubject, throwError} from "rxjs";
import { catchError } from 'rxjs/operators';
import { UtilService } from 'src/app/services/util.service';
 
import { AstoinfoPage } from '../astoinfo/astoinfo.page';


@Component({
  selector: 'app-barcodehk',
  templateUrl: './barcodehk.page.html',
  styleUrls: ['./barcodehk.page.scss'],
})
export class BarcodehkPage implements OnInit {
  [x: string]: any;
  DataRecord:any;
  FormInfo:FormGroup;
  authService: any;
  message:any;
  barcode1: any[] = [
    {id: 1, name: '', src: '', background: '', page: ''},

  ];
  barcode2: any[] = [
    {id: 1, name: '', src: '', background: '', page: ''},

  ];
  slideOpts = {
    initialSlide: 1,
    speed: 500,
    loop: true,
    autoplay: {
          delay: 2500
    }
  };  tabID; 

  constructor(
    private serviceService:ServiceService,
    private navCtrl: NavController, 
      private router: Router,
      public util: UtilService,
      private modalCtrl: ModalController,
  ) { }


  ngOnInit() {
  }
  openBarkamar() {
    this.router.navigate(['barcodekamar']);
  }
  openBarnonkamar() {
    this.router.navigate(['barcodenonkamar']);
  }
  close() {
    this.router.navigate(['manual']);
  }
}
