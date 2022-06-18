import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashTugashkPageRoutingModule } from './dash-tugashk-routing.module';

import { DashTugashkPage } from './dash-tugashk.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashTugashkPageRoutingModule
  ],
  declarations: [DashTugashkPage]
})
export class DashTugashkPageModule {}
