import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashAduanmtPageRoutingModule } from './dash-aduanmt-routing.module';

import { DashAduanmtPage } from './dash-aduanmt.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashAduanmtPageRoutingModule
  ],
  declarations: [DashAduanmtPage]
})
export class DashAduanmtPageModule {}
