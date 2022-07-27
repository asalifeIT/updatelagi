import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController, LoadingController, ToastController } from '@ionic/angular';
import { RegisterPage } from '../register/register.page';
import { ServiceService } from '../services/service.service';
import { IonRouterOutlet, Platform } from '@ionic/angular';
import { UtilService } from '../services/util.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  FormLogin: FormGroup;
  showPasswordText: any;
  dataLogin: any;
  permissions: string[];

  validations = {
    'nrp': [
      { type: 'required', message: 'nrp harus diisi.' }
    ],
    'password': [
      { type: 'required', message: 'password harus diisi.' }
    ]
  };
  authService: any;


  constructor(
    private formBuilder: FormBuilder,
    public loadingController: LoadingController,
    public modalController: ModalController,
    public toastController: ToastController,
    public serviceService: ServiceService,
    private routerOutlet: IonRouterOutlet,
    private util: UtilService
  ) { }

  ngOnInit() {
    this.FormLogin = this.formBuilder.group({
      nrp: new FormControl('', Validators.compose([
        Validators.required
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required
      ]))
    });

  }

  ionViewDidEnter() {
    this.routerOutlet.swipeGesture = false;
    this.util.disableSideMenu();
  }

  ionViewDidLeave() {
    this.routerOutlet.swipeGesture = true;
    this.util.enableSideMenu();
  }

  //fungsi login
  async login() {
    const loading = await this.loadingController.create({
      message: 'Please wait...'

    });
    await loading.present();
    if (this.FormLogin.valid) {
      this.serviceService.loginApi(this.FormLogin.value, 'signin').subscribe(
        data => {
          this.dataLogin = data;
          this.presentToast("Login Berhasil", 800)
        },
        error => {
          this.presentToast(error, 2000);
        }
      );
    }
    
    this.FormLogin.reset();
    loading.dismiss();
  }

  //menampilkan halaman register
  async registerModal() {
    const modal = await this.modalController.create({
      component: RegisterPage
    });
    return await modal.present();
  }

  async presentToast(Message, time) {
    const toast = await this.toastController.create({
      message: Message,
      duration: time,
      position: "top"
    });
    toast.present();

  }

  Login() {
    console.log("Anda sekarang login")
    this.authService.login(this.nrp, this.password)
  }
  nrp(nrp: any, password: any) {
    throw new Error('Method not implemented.');
  }
  password(nrp: any, password: any) {
    throw new Error('Method not implemented.');
  }

}
