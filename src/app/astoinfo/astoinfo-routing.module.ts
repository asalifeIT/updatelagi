import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AstoinfoPage } from './astoinfo.page';

const routes: Routes = [
  {
    path: '',
    component: AstoinfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AstoinfoPageRoutingModule {}
