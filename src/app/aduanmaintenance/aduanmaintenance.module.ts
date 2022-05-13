import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import  {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AduanmaintenancePageRoutingModule } from './aduanmaintenance-routing.module';
import { AduanmaintenancePage } from './aduanmaintenance.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AduanmaintenancePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AduanmaintenancePage]
})
export class AduanmaintenancePageModule {}
