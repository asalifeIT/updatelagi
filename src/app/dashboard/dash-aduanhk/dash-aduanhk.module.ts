import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { DashAduanhkPageRoutingModule } from './dash-aduanhk-routing.module';
import { DashAduanhkPage } from './dash-aduanhk.page';
import  {ReactiveFormsModule, FormsModule} from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashAduanhkPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [DashAduanhkPage],

})
export class DashAduanhkPageModule {}
