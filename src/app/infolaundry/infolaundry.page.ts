import { ServiceService } from "./../services/service.service";
import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import {
  ModalController,
  LoadingController,
  ToastController,
} from "@ionic/angular";
import { UtilService } from "src/app/services/util.service";
import { RatingAduanComponent } from "./rating-aduan/rating-aduan.component";
import { RejectAduanComponent } from "./reject-aduan/reject-aduan.component";

@Component({
  selector: "app-infolaundry",
  templateUrl: "./infolaundry.page.html",
  styleUrls: ["./infolaundry.page.scss"],
})
export class InfolaundryPage implements OnInit {
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
    public util: UtilService
  ) {}

  ngOnInit() {
    this.serviceService.getRecord("laundry/my").subscribe(
      (data) => {
        this.DataRecord = data.body;
      },
      (error) => {
        console.log("err", error);
      }
    );
  }

  onBack() {
    this.router.navigate(["home"]);
  }

  openAdlaundry() {
    this.router.navigate(["aduanlaundry"]);
  }

  getValueStatusBar(status) {
    if (status == "SEARCHING") return 0.33;
    if (status == "COMPENSATION") return 0.66;
    if (status == "DONE") return 1;
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
    if (status == "DONE") {
      return "success";
    }
    if (status == "COMPENSATION") {
      return "warning";
    }

    if (status == "SEARCHING") {
      return "secondary";
    }
  }
}
