import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashroomPage } from './dashroom.page';

const routes: Routes = [
  {
    path: '',
    component: DashroomPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashroomPageRoutingModule {}
