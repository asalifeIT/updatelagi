import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { DashAduanlaundryPageRoutingModule } from './dash-aduanlaundry-routing.module';
import { DashAduanlaundryPage } from './dash-aduanlaundry.page';
import  {ReactiveFormsModule, FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashAduanlaundryPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [DashAduanlaundryPage],
})
export class DashAduanlaundryPageModule {}
