import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfohkPage } from './infohk.page';

const routes: Routes = [
  {
    path: '',
    component: InfohkPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfohkPageRoutingModule {}
