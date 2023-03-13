import { ServiceService } from "src/app/services/service.service";
import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import {
  AlertController,
  ModalController,
  LoadingController,
  ToastController,
} from "@ionic/angular";
import { ReplaySubject } from "rxjs/index";
import { UtilService } from "src/app/services/util.service";
import { UpdateStatusAndDetailComponent } from "./update-status-and-detail/update-status-and-detail.component";

@Component({
  selector: "app-dash-aduanmt",
  templateUrl: "./dash-aduanmt.page.html",
  styleUrls: ["./dash-aduanmt.page.scss"],
})
export class DashAduanmtPage implements OnInit {
  [x: string]: any;
  authenticationState = new ReplaySubject();
  message: any;
  Data: any;
  DataLogin: any;
  DataRecord: any;
  DataUsersMt: any;
  nrpUser: string;

  constructor(
    private serviceService: ServiceService,
    public loadingController: LoadingController,
    public modalController: ModalController,
    public toastController: ToastController,
    private router: Router,
    public util: UtilService,
    public alertController: AlertController
  ) {}

  ngOnInit() {
    this.getUser();
    this.getRecordMaintenance();
    this.getUsersMt();
    this.getUserNrp();
  }

  getUsersMt() {
    this.serviceService.getRecord("users/mt").subscribe(
      (data) => {
        this.DataUsersMt = data.body;
      },
      (error) => {
        console.log("err", error);
      }
    );
  }

  getUser() {
    this.Username = this.serviceService.getUserName();
  }

  getUserNrp() {
    this.nrpUser = this.serviceService.getNrpUser();
  }

  getRecordMaintenance() {
    this.serviceService.getRecord("maintenance/all").subscribe(
      (data) => {
        this.DataRecord = data.body;
      },
      (error) => {
        console.log("err", error);
      }
    );
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
    if (this.serviceService.isHasAccess("MAINTENANCE", "COMPLAINT", "EDIT")) {
      const modal = await this.modalController.create({
        component: UpdateStatusAndDetailComponent,
        componentProps: {
          id: data.id,
          status: data.status,
          priority: data.priority,
          duration: data.duration,
          pic_nrp: data.pic_nrp,
          usersMt: this.DataUsersMt,
        },
      });
      await modal.present();
      const message = await modal.onWillDismiss();
      if (message.data === "success") {
        this.ngOnInit();
      }
      if (message.data) {
        this.presentToast(message.data);
      }
    }
  }

  isNotMtUser() {
    const user = JSON.parse(localStorage.getItem("user"));
    const roleUser = user.roles[2];
    return roleUser != "ROLE_MT";
  }

  async openModalUpdateStatus(data) {
    let newStatus: string = data.status;
    const alert = await this.alertController.create({
      cssClass: "my-custom-class",
      header: "Ubah Status!",
      message: "Status sekarang: " + data.status,
      inputs: [
        {
          name: "OPEN",
          type: "radio",
          label: "OPEN",
          value: "OPEN",
          handler: () => {
            newStatus = "OPEN";
          },
          checked: data.status == "OPEN",
        },
        {
          name: "PROGRESS",
          type: "radio",
          label: "PROGRESS",
          value: "PROGRESS",
          handler: () => {
            newStatus = "PROGRESS";
          },
          checked: data.status == "PROGRESS",
        },
        {
          name: "HOLD",
          type: "radio",
          label: "HOLD",
          value: "HOLD",
          handler: () => {
            newStatus = "HOLD";
          },
          checked: data.status == "HOLD",
        },
        {
          name: "CLOSED",
          type: "radio",
          label: "CLOSED",
          value: "CLOSED",
          handler: () => {
            newStatus = "CLOSED";
          },
          checked: data.status == "CLOSED",
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
            this.updateStatus(newStatus, data.id);
          },
        },
      ],
    });
    await alert.present();
  }

  async updateStatus(newStatus, id) {
    const loading = await this.loadingController.create({
      message: "Please wait...",
    });
    await loading.present();

    const payload = {
      status: newStatus,
    };

    this.serviceService
      .updateStatus(payload, "maintenance/update-status-order/", id)
      .subscribe(
        (data) => {
          console.log(data.body);
          loading.dismiss();
          this.ngOnInit();
          this.presentToast("Success Update Status");
        },
        (error) => {
          console.log(error.message);
          this.presentToast("Failed Update Status");

          loading.dismiss();
        }
      );
  }

  handleRefresh(event) {
    setTimeout(() => {
      this.ngOnInit();
      event.target.complete();
    }, 2000);
  }
}
