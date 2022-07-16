import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BarcodehkPageRoutingModule } from './barcodehk-routing.module';

import { BarcodehkPage } from './barcodehk.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BarcodehkPageRoutingModule,
  ],
  declarations: [BarcodehkPage]
})
export class BarcodehkPageModule {}
