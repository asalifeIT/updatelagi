import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { DashAduanmtPageRoutingModule } from './dash-aduanmt-routing.module';
import { DashAduanmtPage } from './dash-aduanmt.page';
import  {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { UpdateStatusAndDetailComponent } from './update-status-and-detail/update-status-and-detail.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashAduanmtPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [DashAduanmtPage, UpdateStatusAndDetailComponent],
  entryComponents: [UpdateStatusAndDetailComponent]

})
export class DashAduanmtPageModule {}
