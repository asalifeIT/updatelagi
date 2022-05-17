import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoaduanPage } from './infoaduan.page';

const routes: Routes = [
  {
    path: '',
    component: InfoaduanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoaduanPageRoutingModule {}
