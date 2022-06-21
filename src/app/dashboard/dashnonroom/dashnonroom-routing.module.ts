import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashnonroomPage } from './dashnonroom.page';

const routes: Routes = [
  {
    path: '',
    component: DashnonroomPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashnonroomPageRoutingModule {}
