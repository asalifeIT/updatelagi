import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { DashAduancatPageRoutingModule } from './dash-aduancat-routing.module';
import { DashAduancatPage } from './dash-aduancat.page';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UpdateStatusComponent } from './update-status/update-status.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashAduancatPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [DashAduancatPage, UpdateStatusComponent],
  entryComponents: [UpdateStatusComponent]
})
export class DashAduancatPageModule {}
