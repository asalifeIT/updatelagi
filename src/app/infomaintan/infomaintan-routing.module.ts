import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfomaintanPage } from './infomaintan.page';

const routes: Routes = [
  {
    path: '',
    component: InfomaintanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfomaintanPageRoutingModule {}
