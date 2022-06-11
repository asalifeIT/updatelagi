import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashAduancatPage } from './dash-aduancat.page';

const routes: Routes = [
  {
    path: '',
    component: DashAduancatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashAduancatPageRoutingModule {}
