import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashnonroomPageRoutingModule } from './dashnonroom-routing.module';

import { DashnonroomPage } from './dashnonroom.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashnonroomPageRoutingModule
  ],
  declarations: [DashnonroomPage]
})
export class DashnonroomPageModule {}
