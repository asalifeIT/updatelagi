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
  selector: 'app-manual',
  templateUrl: './manual.page.html',
  styleUrls: ['./manual.page.scss'],
})
export class ManualPage implements OnInit {
  [x: string]: any;
  DataRecord:any;
  FormInfo:FormGroup;
  authService: any;
  message:any;
manual: any[] = [
    {id: 1, name: '', src: '', background: '', page: ''},

  ];

  barcode: any[] = [
    {id: 1, name: '', src: '', background: '', page: ''},

  ];
  

  constructor(
    private serviceService:ServiceService,
    private navCtrl: NavController, 
      private router: Router,
      public util: UtilService
  ) { }


  ngOnInit() {
  }
  openManual() {
    this.router.navigate(['sub']);
  }
  openBarcode() {
    this.router.navigate(['barcodehk']);
  }
  onBack() {
    this.router.navigate(['housekeeping']);
  }
}