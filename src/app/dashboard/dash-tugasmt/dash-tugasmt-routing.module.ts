import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashTugasmtPage } from './dash-tugasmt.page';

const routes: Routes = [
  {
    path: '',
    component: DashTugasmtPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashTugasmtPageRoutingModule {}
