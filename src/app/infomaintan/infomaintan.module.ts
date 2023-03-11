import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { InfomaintanPageRoutingModule } from "./infomaintan-routing.module";
import { InfomaintanPage } from "./infomaintan.page";
import { RatingAduanComponent } from "./rating-aduan/rating-aduan.component";
import { RejectAduanComponent } from "./reject-aduan/reject-aduan.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    InfomaintanPageRoutingModule,
  ],
  declarations: [InfomaintanPage, RatingAduanComponent, RejectAduanComponent],
  entryComponents: [RatingAduanComponent, RejectAduanComponent],
})
export class InfomaintanPageModule {}
