import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { InfohkPageRoutingModule } from "./infohk-routing.module";
import { InfohkPage } from "./infohk.page";
import { RejectAduanComponent } from "./reject-aduan/reject-aduan.component";
import { RatingAduanComponent } from "./rating-aduan/rating-aduan.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    InfohkPageRoutingModule,
  ],
  declarations: [InfohkPage, RatingAduanComponent, RejectAduanComponent],
  entryComponents: [RatingAduanComponent, RejectAduanComponent],
})
export class InfohkPageModule {}
