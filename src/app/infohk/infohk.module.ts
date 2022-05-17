import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfohkPageRoutingModule } from './infohk-routing.module';

import { InfohkPage } from './infohk.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfohkPageRoutingModule
  ],
  declarations: [InfohkPage]
})
export class InfohkPageModule {}
