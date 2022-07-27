import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { UtilService } from 'src/app/services/util.service';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.page.html',
  styleUrls: ['./maintenance.page.scss'],
})
export class MaintenancePage implements OnInit {
  aduanmaintan: any[] = [
    { id: 1, name: '', src: '', background: '', page: '' },

  ];
  tgsmaintan: any[] = [
    { id: 1, name: '', src: '', background: '', page: '' },

  ];

  constructor(
    public loadingController: LoadingController,
    public util: UtilService,
    private router: Router,
    public serviceService: ServiceService,
  ) { }

  ngOnInit() {}
  
  openInfomain() {
    this.router.navigate(['infomaintan']);
  }
  openTgsmain() {
    this.router.navigate(['tgsmaintenance']);
  }
  onBack() {
    this.router.navigate(['home']);
  }
}
