import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyteamPage } from './myteam.page';

const routes: Routes = [
  {
    path: '',
    component: MyteamPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyteamPageRoutingModule {}
