import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashRatingcateringPageRoutingModule } from './dash-ratingcatering-routing.module';

import { DashRatingcateringPage } from './dash-ratingcatering.page';
import { DetailRatingComponent } from './detail-rating/detail-rating.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashRatingcateringPageRoutingModule
  ],
  declarations: [DashRatingcateringPage, DetailRatingComponent],
  entryComponents: [DetailRatingComponent]

})
export class DashRatingcateringPageModule {}
