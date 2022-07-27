import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AduanhkPage } from './aduanhk.page';

const routes: Routes = [
  {
    path: '',
    component: AduanhkPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AduanhkPageRoutingModule {}
