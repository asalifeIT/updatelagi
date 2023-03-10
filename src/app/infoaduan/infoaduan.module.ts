import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { InfoaduanPageRoutingModule } from "./infoaduan-routing.module";
import { InfoaduanPage } from "./infoaduan.page";
import { RatingAduanComponent } from "./rating-aduan/rating-aduan.component";
import { RejectAduanComponent } from "./reject-aduan/reject-aduan.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    InfoaduanPageRoutingModule,
  ],
  declarations: [InfoaduanPage, RatingAduanComponent, RejectAduanComponent],
  entryComponents: [RatingAduanComponent, RejectAduanComponent],
})
export class InfoaduanPageModule {}
