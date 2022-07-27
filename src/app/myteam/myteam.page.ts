import { Component, OnInit } from '@angular/core';
import { NavController,LoadingController } from '@ionic/angular';
import { ServiceService } from '../services/service.service';
import { Router } from '@angular/router';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-myteam',
  templateUrl: './myteam.page.html',
  styleUrls: ['./myteam.page.scss'],
})
export class MyteamPage implements OnInit {
  slideOpts = {
    initialSlide: 1,
    speed: 400,
    loop: true,
    autoplay: {
          delay: 1500
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
