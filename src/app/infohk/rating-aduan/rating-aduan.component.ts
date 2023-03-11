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
  selector: "app-rating-aduan",
  templateUrl: "./rating-aduan.component.html",
  styleUrls: ["./rating-aduan.component.scss"],
})
export class RatingAduanComponent implements OnInit {
  FormRatingAccomplishment: FormGroup;
  @Input() id: string;
  @Input() bintang: Number;
  @Input() feedback: string;

  constructor(
    public toastController: ToastController,
    private formBuilder: FormBuilder,
    public modalController: ModalController,
    private loadingController: LoadingController,
    public serviceService: ServiceService
  ) {}

  ngOnInit() {
    this.FormRatingAccomplishment = this.formBuilder.group({
      bintang: new FormControl(
        `${this.bintang}`,
        Validators.compose([Validators.required])
      ),
      feedback: new FormControl(this.feedback),
    });
  }

  async submitRatingAccomplishment() {
    const loading = await this.loadingController.create({
      message: "Please wait...",
    });
    await loading.present();
    if (this.FormRatingAccomplishment.valid) {
      this.serviceService
        .updateaduan(
          this.FormRatingAccomplishment.value,
          "housekeeping/housekeeping-rate/" + this.id
        )
        .subscribe(
          (data) => {
            this.presentToast(
              "Terima kasih. Rating Aduan Housekeeping Anda Telah Terkirim"
            );
            this.dismiss();
          },
          (error) => {
            this.presentToast(
              "Gagal Terkirim, Silahkan kirim rating aduan lain waktu!"
            );
            this.dismiss();
          }
        );
    } else {
      this.presentToast("Silahkan Lengkapi Isi Rating untuk Aduan Anda!");
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
