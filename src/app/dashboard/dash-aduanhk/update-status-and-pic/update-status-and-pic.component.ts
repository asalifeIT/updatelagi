import { Component, OnInit, Input } from "@angular/core";
import { ServiceService } from "src/app/services/service.service";
import { FormControl, Validators } from "@angular/forms";
import {
  AlertController,
  ModalController,
  LoadingController,
  ToastController,
} from "@ionic/angular";

@Component({
  selector: "app-update-status-and-pic",
  templateUrl: "./update-status-and-pic.component.html",
  styleUrls: ["./update-status-and-pic.component.scss"],
})
export class UpdateStatusAndPicComponent implements OnInit {
  resultMessage: string;
  @Input() id: string;
  @Input() status: string;
  @Input() pic_nrp: string;
  @Input() pic_name: string;
  @Input() usersHk: any;

  picInput = new FormControl("", Validators.required);

  constructor(
    public serviceService: ServiceService,
    public loadingController: LoadingController,
    public modalController: ModalController,
    public toastController: ToastController,
    private alertController: AlertController
  ) {}

  ngOnInit() {}

  async updatePic() {
    const loading = await this.loadingController.create({
      message: "Please wait...",
    });
    await loading.present();

    const payload = {
      nrp: this.picInput.value ? this.picInput.value : this.pic_nrp,
    };

    if (payload.nrp === null) {
      this.resultMessage = "Gagal update data, silakan lengkapi pilihan";
      this.modalController.dismiss(this.resultMessage, "resultMessage");
      loading.dismiss();
    }

    if (this.picInput.value === this.picInput) {
      this.resultMessage = "Success Update PIC";
      this.modalController.dismiss(this.resultMessage, "resultMessage");
      loading.dismiss();
    }

    this.serviceService
      .updateStatus(payload, "housekeeping/set-pic/", this.id)
      .subscribe(
        (data) => {
          this.resultMessage = "success";

          this.modalController.dismiss(this.resultMessage, "resultMessage");
          loading.dismiss();
        },
        (error) => {
          this.resultMessage = "Error";
          loading.dismiss();
        }
      );
  }

  async openModalEditStatus(id, data) {
    let status: string = data;
    if (this.serviceService.isHasAccess("HOUSEKEEPING", "COMPLAINT", "EDIT")) {
      const alert = await this.alertController.create({
        cssClass: "my-custom-class",
        header: "Ubah Status!",
        message: "Status sekarang: " + data.slice(0, 8),
        inputs: [
          {
            name: "CLEANING",
            type: "radio",
            label: "CLEANING",
            value: "CLEANING_PROGRESS",
            handler: () => {
              status = "CLEANING_PROGRESS";
            },
            checked: data == "CLEANING_PROGRESS",
          },
          {
            name: "DONE",
            type: "radio",
            label: "DONE",
            value: "DONE",
            handler: () => {
              status = "DONE";
            },
            checked: data == "DONE",
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
              this.updateaduan(id, status, data);
            },
          },
        ],
      });
      await alert.present();
    }
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
    this.resultMessage = "SUCCESS";
    this.modalController.dismiss(this.resultMessage, "resultMessage");
  }

  statusBagde(status) {
    if (status == "DONE") {
      return "success";
    }

    if (status == "CLEANING_PROGRESS") {
      return "warning";
    }
  }

  async presentToast(Message) {
    const toast = await this.toastController.create({
      message: Message,
      duration: 2500,
      position: "top",
    });
    toast.present();
  }
}
