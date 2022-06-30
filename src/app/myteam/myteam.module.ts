import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyteamPageRoutingModule } from './myteam-routing.module';

import { MyteamPage } from './myteam.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyteamPageRoutingModule
  ],
  declarations: [MyteamPage]
})
export class MyteamPageModule {}
