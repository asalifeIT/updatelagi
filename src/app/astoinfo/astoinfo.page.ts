import { Component, OnInit } from '@angular/core';
import { Platform, NavController,LoadingController, ModalController } from '@ionic/angular';
import { ServiceService } from '../services/service.service';
import { Router } from '@angular/router';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-astoinfo',
  templateUrl: './astoinfo.page.html',
  styleUrls: ['./astoinfo.page.scss'],
})
export class AstoinfoPage implements OnInit {
  slideOpts = {
    initialSlide: 1,
    speed: 400,
    loop: true,
    autoplay: {
          delay: 1500
    }
  };
  constructor(
    private modalCtrl: ModalController,
    public loadingController: LoadingController,
    public serviceService: ServiceService,
    private router: Router,
    public util: UtilService,
    public navCtrl: NavController,
    private platform: Platform,
    ) { }

    ngOnInit() {}

    close(){
      this.router.navigate(['information']);
    }
}
