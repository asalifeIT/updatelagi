import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashTugashkPage } from './dash-tugashk.page';

const routes: Routes = [
  {
    path: '',
    component: DashTugashkPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashTugashkPageRoutingModule {}
