
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { UtilService } from 'src/app/services/util.service';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-catering',
  templateUrl: './catering.page.html',
  styleUrls: ['./catering.page.scss'],
})
export class CateringPage implements OnInit {
  [x: string]: any;

  aduan: any[1] = [
    { id: 1, name: '', src: '', background: '', page: '' },
  ];

  rating: any[2] = [
    { id: 1, name: '', src: '', background: '', page: '' },
  ];


  constructor(
    public loadingController: LoadingController,
    private router: Router,
    public util: UtilService,
    public serviceService: ServiceService,
  ) { }

  ngOnInit() {

  }

  onBack() {
    this.router.navigate(['home']);
  }

  openInfoaduan() {
    this.router.navigate(['infoaduan']);
  }

  openRatingcat() {
    this.router.navigate(['ratingcatering']);
  }
}
