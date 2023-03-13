import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { DashAduanhkPageRoutingModule } from "./dash-aduanhk-routing.module";
import { DashAduanhkPage } from "./dash-aduanhk.page";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { UpdateStatusAndPicComponent } from "./update-status-and-pic/update-status-and-pic.component";
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashAduanhkPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [DashAduanhkPage, UpdateStatusAndPicComponent],
  entryComponents: [UpdateStatusAndPicComponent],
})
export class DashAduanhkPageModule {}
