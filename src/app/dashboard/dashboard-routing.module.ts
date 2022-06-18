import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardPage } from './dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardPage
  },
  {
    path: 'dash-tugasmt',
    loadChildren: () => import('./dash-tugasmt/dash-tugasmt.module').then( m => m.DashTugasmtPageModule)
  },
  {
    path: 'dash-tugashk',
    loadChildren: () => import('./dash-tugashk/dash-tugashk.module').then( m => m.DashTugashkPageModule)
  },
  {
    path: 'dash-ratingcatering',
    loadChildren: () => import('./dash-ratingcatering/dash-ratingcatering.module').then( m => m.DashRatingcateringPageModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardPageRoutingModule {}
