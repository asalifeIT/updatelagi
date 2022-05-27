import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NonkamarPage } from './nonkamar.page';

const routes: Routes = [
  {
    path: '',
    component: NonkamarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NonkamarPageRoutingModule {}
