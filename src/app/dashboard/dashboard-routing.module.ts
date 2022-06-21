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
  {
    path: 'dash-tugashk',
    loadChildren: () => import('./dash-tugashk/dash-tugashk.module').then( m => m.DashTugashkPageModule)
  },
  {
    path: 'dash-tugasmt',
    loadChildren: () => import('./dash-tugasmt/dash-tugasmt.module').then( m => m.DashTugasmtPageModule)
  },
  {
    path: 'dashroom',
    loadChildren: () => import('./dashroom/dashroom.module').then( m => m.DashroomPageModule)
  },
  {
    path: 'dashnonroom',
    loadChildren: () => import('./dashnonroom/dashnonroom.module').then( m => m.DashnonroomPageModule)
  },

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardPageRoutingModule {}
