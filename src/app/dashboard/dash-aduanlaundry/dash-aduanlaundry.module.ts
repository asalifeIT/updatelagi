import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { DashAduanlaundryPageRoutingModule } from './dash-aduanlaundry-routing.module';
import { DashAduanlaundryPage } from './dash-aduanlaundry.page';
import  {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { UpdateStatusComponent } from './update-status/update-status.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashAduanlaundryPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [DashAduanlaundryPage, UpdateStatusComponent],
  entryComponents: [UpdateStatusComponent]
})
export class DashAduanlaundryPageModule {}
