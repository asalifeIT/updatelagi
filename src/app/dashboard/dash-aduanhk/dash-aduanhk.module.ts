import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashAduanhkPageRoutingModule } from './dash-aduanhk-routing.module';

import { DashAduanhkPage } from './dash-aduanhk.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashAduanhkPageRoutingModule
  ],
  declarations: [DashAduanhkPage]
})
export class DashAduanhkPageModule {}
