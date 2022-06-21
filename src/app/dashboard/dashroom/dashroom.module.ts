import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashroomPageRoutingModule } from './dashroom-routing.module';

import { DashroomPage } from './dashroom.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashroomPageRoutingModule
  ],
  declarations: [DashroomPage]
})
export class DashroomPageModule {}
