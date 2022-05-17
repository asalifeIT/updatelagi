import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { InfoaduanPageRoutingModule } from './infoaduan-routing.module';
import { InfoaduanPage } from './infoaduan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoaduanPageRoutingModule
  ],
  declarations: [InfoaduanPage]
})
export class InfoaduanPageModule {}
