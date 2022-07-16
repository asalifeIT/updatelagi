import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BarcodenonkamarPageRoutingModule } from './barcodenonkamar-routing.module';

import { BarcodenonkamarPage } from './barcodenonkamar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BarcodenonkamarPageRoutingModule
  ],
  declarations: [BarcodenonkamarPage]
})
export class BarcodenonkamarPageModule {}
