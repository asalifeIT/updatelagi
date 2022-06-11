import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashAduanmtPage } from './dash-aduanmt.page';

const routes: Routes = [
  {
    path: '',
    component: DashAduanmtPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashAduanmtPageRoutingModule {}
