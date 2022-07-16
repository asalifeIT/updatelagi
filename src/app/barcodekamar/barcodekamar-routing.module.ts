import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BarcodekamarPage } from './barcodekamar.page';

const routes: Routes = [
  {
    path: '',
    component: BarcodekamarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BarcodekamarPageRoutingModule {}
