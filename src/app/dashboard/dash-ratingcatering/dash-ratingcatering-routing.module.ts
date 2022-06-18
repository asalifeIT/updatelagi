import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashRatingcateringPage } from './dash-ratingcatering.page';

const routes: Routes = [
  {
    path: '',
    component: DashRatingcateringPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashRatingcateringPageRoutingModule {}
