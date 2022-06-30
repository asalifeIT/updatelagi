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
import { AstoinfoPage } from '../astoinfo/astoinfo.page';

@Component({
  selector: 'app-information',
  templateUrl: './information.page.html',
  styleUrls: ['./information.page.scss'],
  
})
export class InformationPage implements OnInit {
  tabID;
  constructor(private modalCtrl: ModalController)  { }

  ngOnInit() {

  }

  close() {
    this.modalCtrl.dismiss();;
}

async openAstoinfo() {
  const modal = await this.modalCtrl.create({
      component: AstoinfoPage,
  });
  modal.present();
}

}
