import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashAduancatPageRoutingModule } from './dash-aduancat-routing.module';

import { DashAduancatPage } from './dash-aduancat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashAduancatPageRoutingModule
  ],
  declarations: [DashAduancatPage]
})
export class DashAduancatPageModule {}
