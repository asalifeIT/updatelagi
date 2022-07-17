import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestbarcodePage } from './testbarcode.page';

const routes: Routes = [
  {
    path: '',
    component: TestbarcodePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestbarcodePageRoutingModule {}
