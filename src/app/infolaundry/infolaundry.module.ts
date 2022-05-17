import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfolaundryPageRoutingModule } from './infolaundry-routing.module';

import { InfolaundryPage } from './infolaundry.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfolaundryPageRoutingModule
  ],
  declarations: [InfolaundryPage]
})
export class InfolaundryPageModule {}
