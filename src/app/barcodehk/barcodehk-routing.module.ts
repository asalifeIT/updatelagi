import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BarcodehkPage } from './barcodehk.page';

const routes: Routes = [
  {
    path: '',
    component: BarcodehkPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BarcodehkPageRoutingModule {}
