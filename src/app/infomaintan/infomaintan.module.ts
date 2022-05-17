import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfomaintanPageRoutingModule } from './infomaintan-routing.module';

import { InfomaintanPage } from './infomaintan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfomaintanPageRoutingModule
  ],
  declarations: [InfomaintanPage]
})
export class InfomaintanPageModule {}
