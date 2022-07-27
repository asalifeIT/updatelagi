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
  selector: 'app-information',
  templateUrl: './information.page.html',
  styleUrls: ['./information.page.scss'],
  
})
export class InformationPage implements OnInit {
  slideOpts = {
    initialSlide: 1,
    speed: 400,
    loop: true,
    autoplay: {
          delay: 3500
    }
  };
  tabID;
  constructor(
    private modalCtrl: ModalController,
    private router: Router
    )  { }

  ngOnInit() {

  }

  openAstoinfo(){
    this.router.navigate(['astoinfo']);
  }

  openDev(){
    this.router.navigate(['developer']);
  }

  openTeam(){
    this.router.navigate(['myteam']);
  }
  close(){
    this.router.navigate(['home']);
  }
  openSupport(){
    this.router.navigate(['support']);
  }

  }


