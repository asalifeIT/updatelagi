import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashAduanhkPage } from './dash-aduanhk.page';

const routes: Routes = [
  {
    path: '',
    component: DashAduanhkPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashAduanhkPageRoutingModule {}
