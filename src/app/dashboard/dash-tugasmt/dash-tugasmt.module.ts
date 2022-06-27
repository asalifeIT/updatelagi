import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { DashTugasmtPageRoutingModule } from './dash-tugasmt-routing.module';
import { DashTugasmtPage } from './dash-tugasmt.page';
import  {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { UpdateStatusComponent } from './update-status/update-status.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashTugasmtPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [DashTugasmtPage, UpdateStatusComponent],
  entryComponents: [UpdateStatusComponent]
})
export class DashTugasmtPageModule {}
