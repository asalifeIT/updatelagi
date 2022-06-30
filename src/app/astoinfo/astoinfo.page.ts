import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-astoinfo',
  templateUrl: './astoinfo.page.html',
  styleUrls: ['./astoinfo.page.scss'],
})
export class AstoinfoPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

    ngOnInit() {
    }

    close() {
        this.modalCtrl.dismiss();
    }

}
