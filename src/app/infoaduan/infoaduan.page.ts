import { ServiceService } from "./../services/service.service";
import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import {
  ModalController,
  LoadingController,
  ToastController,
  AlertController,
} from "@ionic/angular";
import { UtilService } from "src/app/services/util.service";
import { RatingAduanComponent } from "./rating-aduan/rating-aduan.component";
import { RejectAduanComponent } from "./reject-aduan/reject-aduan.component";

@Component({
  selector: "app-infoaduan",
  templateUrl: "./infoaduan.page.html",
  styleUrls: ["./infoaduan.page.scss"],
})
export class InfoaduanPage implements OnInit {
  [x: string]: any;
  DataRecord: any;
  FormInfo: FormGroup;
  authService: any;
  message: any;
  aduan: any[1] = [{ id: 1, name: "", src: "", background: "", page: "" }];

  constructor(
    public serviceService: ServiceService,
    public loadingController: LoadingController,
    public modalController: ModalController,
    public toastController: ToastController,
    private router: Router,
    public util: UtilService,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.serviceService.getRecord("catering/my").subscribe(
      (data) => {
        this.DataRecord = data.body;
      },
      (error) => {
        console.log("err", error);
      }
    );
  }

  onBack() {
    this.router.navigate(["catering"]);
  }

  openAdcatering() {
    this.router.navigate(["aduancatering"]);
  }

  getValueStatusBar(status) {
    if (status == "INQUIRY") return 0.33;
    if (status == "INVESTIGATION") return 0.66;
    if (status == "CLOSED") return 1;
  }

  // Function to open modal edit
  async openModalRatingAduan(data) {
    const modal = await this.modalController.create({
      component: RatingAduanComponent,
      cssClass: "adaptable-modal",
      componentProps: {
        id: data.id,
        status: data.status,
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
    if (status == "CLOSED") {
      return "success";
    }
    if (status == "INQUIRY") {
      return "secondary";
    }

    if (status == "INVESTIGATION") {
      return "warning";
    }
  }
}
