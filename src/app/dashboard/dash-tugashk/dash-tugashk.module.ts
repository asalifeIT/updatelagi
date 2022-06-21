import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { DashTugashkPageRoutingModule } from './dash-tugashk-routing.module';
import { DashTugashkPage } from './dash-tugashk.page';
import  {ReactiveFormsModule, FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashTugashkPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [DashTugashkPage]
})
export class DashTugashkPageModule {}
