import { Component, OnInit } from '@angular/core';
import { Platform, NavController,LoadingController } from '@ionic/angular';
import { ServiceService } from 'src/app/services/service.service';
import { Router } from '@angular/router';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-dash-tugasmt',
  templateUrl: './dash-tugasmt.page.html',
  styleUrls: ['./dash-tugasmt.page.scss'],
})
export class DashTugasmtPage implements OnInit {
  private routerEvents: any;
  Username:any;
  DataLogin:any;
  constructor(
    public loadingController: LoadingController,
    private serviceService: ServiceService,
    private router: Router,
    public util: UtilService,
    public navCtrl: NavController
  ) { }


  ngOnInit() {
  }

}
