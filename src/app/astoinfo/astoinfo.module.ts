import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AstoinfoPageRoutingModule } from './astoinfo-routing.module';
import { AstoinfoPage } from './astoinfo.page';
import { InformationPageModule } from '../information/information.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AstoinfoPageRoutingModule,
    InformationPageModule
  ],
  declarations: [AstoinfoPage],
})
export class AstoinfoPageModule {}
