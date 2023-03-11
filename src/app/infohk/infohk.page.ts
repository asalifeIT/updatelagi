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
  selector: "app-infohk",
  templateUrl: "./infohk.page.html",
  styleUrls: ["./infohk.page.scss"],
})
export class InfohkPage implements OnInit {
  [x: string]: any;
  DataRecord: any;
  FormInfo: FormGroup;
  authService: any;
  message: any;
  aduan: any[1] = [{ id: 1, name: "", src: "", background: "", page: "" }];

  constructor(
    private alertController: AlertController,
    private serviceService: ServiceService,
    public loadingController: LoadingController,
    public modalController: ModalController,
    public toastController: ToastController,
    private router: Router,
    public util: UtilService
  ) {}

  ngOnInit() {
    this.serviceService.getRecord("housekeeping/my").subscribe(
      (data) => {
        this.DataRecord = data.body;
      },
      (error) => {
        console.log("err", error);
      }
    );
  }

  canScroll() {
    return this.DataRecord.length > 5;
  }

  onBack() {
    this.router.navigate(["housekeeping"]);
  }

  openAdhk() {
    this.router.navigate(["aduanhk"]);
  }

  getValueStatusBar(status) {
    if (status == "CLEANING_PROGRESS") return 0.5;
    if (status == "DONE") return 1;
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

    const message = await modal.onWillDismiss();
    if (message.data === "SUCCESS") {
      this.ngOnInit();
    }
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

    const message = await modal.onWillDismiss();
    if (message.data === "SUCCESS") {
      this.ngOnInit();
    }
  }

  statusBagde(status) {
    if (status == "DONE") {
      return "success";
    }

    if (status == "CLEANING_PROGRESS") {
      return "warning";
    }
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

  handleRefresh(event) {
    setTimeout(() => {
      this.ngOnInit();
      event.target.complete();
    }, 2000);
  }
}
