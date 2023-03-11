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
  resultMessage: any;
  FormRatingAccomplishment: FormGroup;
  @Input() id: string;
  @Input() bintang: Number;
  @Input() feedback: string;

  constructor(
    public modalController: ModalController,
    public toastController: ToastController,
    private formBuilder: FormBuilder,
    private loadingController: LoadingController,
    public serviceService: ServiceService
  ) {}

  ngOnInit() {
    this.FormRatingAccomplishment = this.formBuilder.group({
      bintang: new FormControl(
        `${this.bintang}`,
        Validators.compose([
          Validators.required,
          Validators.pattern("^[1-5]*$"),
        ])
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
          "laundry/laundry-rate/" + this.id
        )
        .subscribe(
          (data) => {
            this.presentToast(
              "Terima kasih. Rating Aduan Laundry Anda Telah Terkirim"
            );
            this.resultMessage = "SUCCESS";
            this.modalController.dismiss(this.resultMessage, "resultMessage");
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
