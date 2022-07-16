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
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';

@Component({
  selector: 'app-barcodekamar',
  templateUrl: './barcodekamar.page.html',
  styleUrls: ['./barcodekamar.page.scss'],
})
export class BarcodekamarPage implements OnInit {
  barcode1: any[] = [
    {id: 1, name: '', src: '', background: '', page: ''},
  ];

  constructor(
    private modalCtrl: ModalController,
    private router: Router,
    private barcodeScanner: BarcodeScanner
  ) { }


  
  ngOnInit() {
  }
  close() {
    this.router.navigate(['barcodehk']);
  }

  
}
