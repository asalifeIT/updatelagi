import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashAduanlaundryPageRoutingModule } from './dash-aduanlaundry-routing.module';

import { DashAduanlaundryPage } from './dash-aduanlaundry.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashAduanlaundryPageRoutingModule
  ],
  declarations: [DashAduanlaundryPage]
})
export class DashAduanlaundryPageModule {}
