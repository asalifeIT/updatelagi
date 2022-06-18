import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashAduanlaundryPage } from './dash-aduanlaundry.page';

const routes: Routes = [
  {
    path: '',
    component: DashAduanlaundryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashAduanlaundryPageRoutingModule {}
