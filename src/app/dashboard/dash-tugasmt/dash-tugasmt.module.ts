import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashTugasmtPageRoutingModule } from './dash-tugasmt-routing.module';

import { DashTugasmtPage } from './dash-tugasmt.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashTugasmtPageRoutingModule
  ],
  declarations: [DashTugasmtPage]
})
export class DashTugasmtPageModule {}
