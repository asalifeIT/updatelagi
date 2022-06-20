import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { DashAduanmtPageRoutingModule } from './dash-aduanmt-routing.module';
import { DashAduanmtPage } from './dash-aduanmt.page';
import  {ReactiveFormsModule, FormsModule} from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashAduanmtPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [DashAduanmtPage]
})
export class DashAduanmtPageModule {}
