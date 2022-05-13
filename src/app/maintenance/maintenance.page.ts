import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, ModalController, LoadingController, ToastController,Platform } from '@ionic/angular';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.page.html',
  styleUrls: ['./maintenance.page.scss'],
})
export class MaintenancePage implements OnInit {
  aduanmaintan: any[] = [
    {id: 1, name: '', src: '', background: '', page: ''},

  ];

  tgsmaintan: any[] = [
    {id: 1, name: '', src: '', background: '', page: ''},

  ];


  constructor(
    public loadingController: LoadingController,
    public util: UtilService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  openAdmaintan() {
    this.router.navigate(['aduanmaintenance']);
  }
  openTgsmain() {
    this.router.navigate(['tugasmaint']);
  }
  onBack() {
    this.router.navigate(['home']);
  }

}
