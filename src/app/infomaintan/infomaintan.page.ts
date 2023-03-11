import { ServiceService } from "./../services/service.service";
import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import {
  AlertController,
  ModalController,
  LoadingController,
  ToastController,
} from "@ionic/angular";
import { UtilService } from "src/app/services/util.service";
import { RatingAduanComponent } from "./rating-aduan/rating-aduan.component";
import { RejectAduanComponent } from "./reject-aduan/reject-aduan.component";

@Component({
  selector: "app-infomaintan",
  templateUrl: "./infomaintan.page.html",
  styleUrls: ["./infomaintan.page.scss"],
})
export class InfomaintanPage implements OnInit {
  [x: string]: any;
  DataRecord: any;
  FormInfo: FormGroup;
  authService: any;
  message: any;
  aduan: any[1] = [{ id: 1, name: "", src: "", background: "", page: "" }];

  constructor(
    private alertController: AlertController,
    public serviceService: ServiceService,
    public loadingController: LoadingController,
    public modalController: ModalController,
    public toastController: ToastController,
    private router: Router,
    public util: UtilService
  ) {}

  ngOnInit() {
    this.serviceService.getRecord("maintenance/my").subscribe(
      (data) => {
        this.DataRecord = data.body;
      },
      (error) => {
        console.log("err", error);
      }
    );
  }
  onBack() {
    this.router.navigate(["maintenance"]);
  }
  openAdmain() {
    this.router.navigate(["aduanmaintenance"]);
  }

  getValueStatusBar(status) {
    if (status == "OPEN") return 0.25;
    if (status == "HOLD") return 0.5;
    if (status == "PROGRESS") return 0.75;
    if (status == "CLOSED") return 1;
  }

  // Function to open modal edit
  async openModalRatingAduan(data) {
    const modal = await this.modalController.create({
      component: RatingAduanComponent,
      cssClass: "adaptable-modal",
      componentProps: {
        id: data.id,
        bintang: data.bintang,
        feedback: data.feedback,
      },
    });
    await modal.present();
  }

  async openModalRejectAduan(data) {
    const modal = await this.modalController.create({
      component: RejectAduanComponent,
      cssClass: "adaptable-modal",
      componentProps: {
        id: data.id,
        status: data.status,
      },
    });
    await modal.present();
  }

  statusBagde(status) {
    if (status == "OPEN") return "secondary";
    if (status == "HOLD") return "danger";
    if (status == "PROGRESS") return "warning";
    if (status == "CLOSED") return "success";
  }

  async openModalConfirm(data) {
    const alert = await this.alertController.create({
      cssClass: "my-custom-class",
      header: "Konfirmasi Penyelesaian Aduan",
      message:
        "Pilih tombol 'Ok' untuk menkorfirmasi bahwa aduan telah diselesaikan serta memberi rating." +
        "<br> Pilih tombol 'Tolak' untuk melakukan pengajuan ulang aduan",
      buttons: [
        {
          text: "Tolak",
          role: "tolak",
          cssClass: "secondary",
          handler: () => {
            this.openModalRejectAduan(data);
          },
        },
        {
          text: "Ok",
          handler: () => {
            this.openModalRatingAduan(data);
          },
        },
      ],
    });
    await alert.present();
  }
}
