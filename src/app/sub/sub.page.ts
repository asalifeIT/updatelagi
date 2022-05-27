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
  selector: 'app-sub',
  templateUrl: './sub.page.html',
  styleUrls: ['./sub.page.scss'],
})
export class SubPage implements OnInit {
  [x: string]: any;
  DataRecord:any;
  FormInfo:FormGroup;
  authService: any;
  message:any;
 kamar: any[] = [
    {id: 1, name: '', src: '', background: '', page: ''},

  ];

  nonkamar: any[] = [
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
  openKamar() {
    this.router.navigate(['kamar']);
  }
  openNon() {
    this.router.navigate(['nonkamar']);
  }
  onBack() {
    this.router.navigate(['housekeeping']);
  }
}
