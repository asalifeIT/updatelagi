import { Component, OnInit, Input } from "@angular/core";

import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators,
} from "@angular/forms";

import {
  NavController,
  ModalController,
  LoadingController,
  ToastController,
  Platform,
} from "@ionic/angular";
import { ServiceService } from "src/app/services/service.service";

@Component({
  selector: "app-reject-aduan",
  templateUrl: "./reject-aduan.component.html",
  styleUrls: ["./reject-aduan.component.scss"],
})
export class RejectAduanComponent implements OnInit {
  FormRejectAccomplishment: FormGroup;
  @Input() id: string;
  @Input() status: string;

  constructor(
    public modalController: ModalController,
    public toastController: ToastController,
    private formBuilder: FormBuilder,
    private loadingController: LoadingController,
    public serviceService: ServiceService
  ) {}

  ngOnInit() {
    this.FormRejectAccomplishment = this.formBuilder.group({
      komentar: new FormControl("", Validators.compose([Validators.required])),
    });
  }

  async submitRejectAccomplishment() {
    const loading = await this.loadingController.create({
      message: "Please wait...",
    });
    await loading.present();
    if (this.FormRejectAccomplishment.valid) {
      this.serviceService
        .updateaduan(
          this.FormRejectAccomplishment.value,
          "laundry/laundry-reject/" + this.id
        )
        .subscribe(
          (data) => {
            this.presentToast("Terima kasih. Aduan Anda akan diproses ulang");
            this.dismiss();
          },
          (error) => {
            this.presentToast(
              "Gagal Terkirim, Silahkan coba kirim ulang lain waktu!"
            );
            this.dismiss();
          }
        );
    } else {
      this.presentToast("Silahkan Lengkapi Isi Komentar!");
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

  dismiss() {
    this.modalController.dismiss({
      dismissed: true,
    });
  }
}
