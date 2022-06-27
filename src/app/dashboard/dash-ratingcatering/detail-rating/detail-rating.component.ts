import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-detail-rating',
  templateUrl: './detail-rating.component.html',
  styleUrls: ['./detail-rating.component.scss'],
})
export class DetailRatingComponent {
  @Input() data: any;

  constructor(
    private modalController: ModalController,
    public loadingController: LoadingController
  ) { }

  dismissModal() {
    this.modalController.dismiss(null, 'cancel');
  }
}
