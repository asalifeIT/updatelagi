import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";

import { InfolaundryPageRoutingModule } from "./infolaundry-routing.module";

import { InfolaundryPage } from "./infolaundry.page";
import { RatingAduanComponent } from "./rating-aduan/rating-aduan.component";
import { RejectAduanComponent } from "./reject-aduan/reject-aduan.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    InfolaundryPageRoutingModule,
  ],
  declarations: [InfolaundryPage, RatingAduanComponent, RejectAduanComponent],
  entryComponents: [RatingAduanComponent, RejectAduanComponent],
})
export class InfolaundryPageModule {}
