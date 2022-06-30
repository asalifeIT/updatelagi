import { ServiceService } from 'src/app/services/service.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ModalController, LoadingController, ToastController } from '@ionic/angular';
import { ReplaySubject } from "rxjs/index";
import { UtilService } from 'src/app/services/util.service';
import { UpdateDetailRoomComponent } from './update-detail-room/update-detail-room.component';
import { UpdateDetailNonroomComponent } from './update-detail-nonroom/update-detail-nonroom.component';

@Component({
  selector: 'app-dash-tugashk',
  templateUrl: './dash-tugashk.page.html',
  styleUrls: ['./dash-tugashk.page.scss'],
})

export class DashTugashkPage implements OnInit {
  [x: string]: any;
  authenticationState = new ReplaySubject();
  authService: any;
  message: any;
  Data: any;
  DataLogin: any;
  DataResponse: any;
  DataCheckLogin: any;
  DataRecordRoom: any;
  DataRecordNonRoom: any;
  stringJson: any;
  stringObject: any;

  constructor(
    private serviceService: ServiceService,
    public loadingController: LoadingController,
    public modalController: ModalController,
    public toastController: ToastController,
    private router: Router,
    public util: UtilService,
  ) { }

  ngOnInit() {
    this.someOtherMethod();
    this.serviceService.getRecord('task/room').subscribe(
      data => {
        this.DataRecordRoom = data.body;
      },
      error => {
        console.log("err", error);
      }
    );

    this.serviceService.CekUser().subscribe(
      data => {
        this.DataLogin = data;
        console.log(this.DataLogin)
        this.Username = this.DataLogin.body.name;
        localStorage.getItem(JSON.parse(localStorage.getItem("role")));
      },
      error => {
        console.log("error");
      }
    );

  }

  someOtherMethod() {
    this.serviceService.getRecord2('task/mess').subscribe(
      data => {
        this.DataRecordNonRoom = data.body;
      },
      error => {
        console.log("err", error);
      }
    );
  }

  async presentToast(Message) {
    const toast = await this.toastController.create({
      message: Message,
      duration: 2500,
      position: "top"
    });
    toast.present();
  }

  refresh(): void {
    window.location.reload();
  }

  signout() {
    this.router.navigate(['dashboard']);
  }

  ngOnDestroy() {
    if (typeof this.routerEvents !== 'undefined') this.routerEvents.unsubscribe();
  }

  countPoinRoom(data) {
    const poin = data.lantai_kamar + data.lantai_toilet + data.lantai_langit_kamar + data.lantai_langit_kamar_mandi + data.wc + data.wastafel + data.tempat_tidur + data.sprei + data.selimut + data.ac + data.meja + data.cermin + data.keran + data.shower + data.tempat_sampah + data.jendela + data.gorden + data.lemari;
    return poin;
  }

  countPoinNonRoom(data) {
    const poin = data.ruang_tv_kaca_jendela_kusen + data.ruang_tv_cermin + data.ruang_tv_dispenser + data.ruang_tv_ac + data.ruang_tv_furniture + data.ruang_tv_rak_tv + data.ruang_tv_tirai_karpet + data.ruang_tv_dinding + data.ruang_tv_lantai + data.koridor_tempat_sampah + data.koridor_pintu + data.koridor_lantai_sudut_lantai + data.koridor_keset + data.koridor_pantry + data.koridor_wastafel_chrome_fixture + data.koridor_peralatan_makan_rak_piring + data.koridor_pintu_dinding + data.koridor_kanca_jendela_kusen + data.toilet_pintu_dinding + data.toilet_tempat_sampah + data.toilet_wastafel_chrome_fixture + data.toilet_urinoir_selang_toilet_bowl + data.toilet_shower_area_curtain + data.toilet_lantai_sudut_lantai + data.toilet_teras;
    return poin;
  }

  async openModalRoom(data) {
    const modal = await this.modalController.create({
      component: UpdateDetailRoomComponent,
      componentProps: {
        data: data
      }
    });
    await modal.present();
    const message = await modal.onWillDismiss();
    if (message.data === 'success') {
      this.ngOnInit();
    }
    if (message.data) {
      this.presentToast(message.data);
    }
  }

  async openModalNonRoom(data) {
    const modal = await this.modalController.create({
      component: UpdateDetailNonroomComponent,
      componentProps: {
        data: data
      }
    });
    await modal.present();
    const message = await modal.onWillDismiss();
    if (message.data === 'success') {
      this.ngOnInit();
    }
    if (message.data) {
      this.presentToast(message.data);
    }
  }
}
