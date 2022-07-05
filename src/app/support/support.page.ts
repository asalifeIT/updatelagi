import { Component, OnInit } from '@angular/core';
import { Platform, NavController,LoadingController, ModalController } from '@ionic/angular';
import { ServiceService } from '../services/service.service';
import { Router } from '@angular/router';
import { UtilService } from 'src/app/services/util.service';
import { PreloadAllModules, RouterModule, Routes, CanActivate } from '@angular/router';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-support',
  templateUrl: './support.page.html',
  styleUrls: ['./support.page.scss'],
})
export class SupportPage implements OnInit {
  slideOpts = {
    initialSlide: 1,
    speed: 400,
    loop: true,
    autoplay: {
          delay: 4500
    }
  };
  constructor(
    private modalCtrl: ModalController,
    public loadingController: LoadingController,
    private serviceService: ServiceService,
    private router: Router,
    public util: UtilService,
    public navCtrl: NavController,
    private platform: Platform,
  ) { }

  ngOnInit() {
  }
  close(){
    this.router.navigate(['information']);
  }

}
