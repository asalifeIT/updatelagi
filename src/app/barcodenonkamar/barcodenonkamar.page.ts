import { ServiceService } from './../services/service.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NavController, ModalController, LoadingController, ToastController, Platform } from '@ionic/angular';
import { catchError } from 'rxjs/operators';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-barcodenonkamar',
  templateUrl: './barcodenonkamar.page.html',
  styleUrls: ['./barcodenonkamar.page.scss'],
})
export class BarcodenonkamarPage implements OnInit {
  barcode1: any[] = [
    {id: 1, name: '', src: '', background: '', page: ''},
  ];

  constructor(
    public serviceService: ServiceService,
    private navCtrl: NavController,
    public loadingController: LoadingController,
    public modalController: ModalController,
    private platform: Platform,
    public toastController: ToastController,
    private router: Router,
    public util: UtilService
  ) { }

  ngOnInit() {
  }
  close() {
    this.router.navigate(['barcodehk']);
  }
}