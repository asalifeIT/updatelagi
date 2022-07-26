import { Component, OnInit } from '@angular/core';
import { NavController,LoadingController } from '@ionic/angular';
import { ServiceService } from '../services/service.service';
import { Router } from '@angular/router';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.page.html',
  styleUrls: ['./developer.page.scss'],
})
export class DeveloperPage implements OnInit {
  slideOpts = {
    initialSlide: 1,
    speed: 400,
    loop: true,
    autoplay: {
          delay: 2500
    }
  };
  constructor(
    public loadingController: LoadingController,
    public serviceService: ServiceService,
    private router: Router,
    public util: UtilService,
    public navCtrl: NavController,
  ) { }

  ngOnInit() {}

  close(){
    this.router.navigate(['information']);
  }
}
