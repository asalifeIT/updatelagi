import { ServiceService } from "src/app/services/service.service";
import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import {
  AlertController,
  ModalController,
  LoadingController,
  ToastController,
} from "@ionic/angular";
import { ReplaySubject } from "rxjs";
import { catchError } from "rxjs/operators";
import { UtilService } from "src/app/services/util.service";

@Component({
  selector: "app-dash-aduanhk",
  templateUrl: "./dash-aduanhk.page.html",
  styleUrls: ["./dash-aduanhk.page.scss"],
})
export class DashAduanhkPage implements OnInit {
  [x: string]: any;
  FormStatus: FormGroup;
  authenticationState = new ReplaySubject();
  message: any;
  Data: any;
  DataLogin: any;
  DataRecord: any;

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
    this.getUser();
    this.getRecordHousekeeping();
  }

  getUser() {
    this.Username = this.serviceService.getUserName();
  }

  getRecordHousekeeping() {
    this.serviceService.getRecord("housekeeping/all").subscribe(
      (data) => {
        this.DataRecord = data.body;
      },
      (error) => {
        console.log("err", error);
      }
    );
  }

  async updateaduan(id: string, status: string, statusInit: string) {
    const loading = await this.loadingController.create({
      message: "Please wait...",
    });
    await loading.present();

    const payload = { status: status };

    if (status === statusInit) {
      this.presentToast("Edit Status Aduan Catering Sukses");
    } else {
      this.serviceService
        .updateStatus(payload, "housekeeping/update/", id)
        .subscribe(
          (data) => {
            this.presentToast("Edit Status Aduan Catering Sukses");
            this.ngOnInit();
          },
          (error) => {
            this.presentToast("Edit Status Aduan Catering Gagal");
            console.log(error.message);
          }
        );
    }
    loading.dismiss();
  }

  async presentToast(Message) {
    const toast = await this.toastController.create({
      message: Message,
      duration: 2500,
      position: "top",
    });
    toast.present();
  }

  onBack() {
    this.router.navigate(["dashboard"]);
  }

  ngOnDestroy() {
    if (typeof this.routerEvents !== "undefined")
      this.routerEvents.unsubscribe();
  }

  async openModal(data) {
    let status: string = data.status;
    if (this.serviceService.isHasAccess("HOUSEKEEPING", "COMPLAINT", "EDIT")) {
      const alert = await this.alertController.create({
        cssClass: "my-custom-class",
        header: "Ubah Status!",
        message: "Status sekarang: " + data.status.slice(0, 8),
        inputs: [
          {
            name: "CLEANING",
            type: "radio",
            label: "CLEANING",
            value: "CLEANING_PROGRESS",
            handler: () => {
              status = "CLEANING_PROGRESS";
            },
            checked: data.status == "CLEANING_PROGRESS",
          },
          {
            name: "DONE",
            type: "radio",
            label: "DONE",
            value: "DONE",
            handler: () => {
              status = "DONE";
            },
            checked: data.status == "DONE",
          },
        ],
        buttons: [
          {
            text: "Cancel",
            role: "cancel",
            cssClass: "secondary",
            handler: () => {},
          },
          {
            text: "Ok",
            handler: () => {
              this.updateaduan(data.id, status, data.status);
            },
          },
        ],
      });
      await alert.present();
    }
  }

  handleRefresh(event) {
    setTimeout(() => {
      this.ngOnInit();
      event.target.complete();
    }, 2000);
  }
}
