import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BarcodekamarPageRoutingModule } from './barcodekamar-routing.module';

import { BarcodekamarPage } from './barcodekamar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BarcodekamarPageRoutingModule
  ],
  declarations: [BarcodekamarPage]
})
export class BarcodekamarPageModule {}
