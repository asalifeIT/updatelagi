import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { DashTugasmtPageRoutingModule } from './dash-tugasmt-routing.module';
import { DashTugasmtPage } from './dash-tugasmt.page';
import  {ReactiveFormsModule, FormsModule} from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashTugasmtPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [DashTugasmtPage],
})
export class DashTugasmtPageModule {}
