import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfolaundryPage } from './infolaundry.page';

const routes: Routes = [
  {
    path: '',
    component: InfolaundryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfolaundryPageRoutingModule {}
