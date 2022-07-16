import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BarcodenonkamarPage } from './barcodenonkamar.page';

const routes: Routes = [
  {
    path: '',
    component: BarcodenonkamarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BarcodenonkamarPageRoutingModule {}
