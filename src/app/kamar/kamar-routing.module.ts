import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KamarPage } from './kamar.page';

const routes: Routes = [
  {
    path: '',
    component: KamarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KamarPageRoutingModule {}
