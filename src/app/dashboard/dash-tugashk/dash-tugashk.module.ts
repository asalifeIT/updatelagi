import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { DashTugashkPageRoutingModule } from './dash-tugashk-routing.module';
import { DashTugashkPage } from './dash-tugashk.page';
import  {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { UpdateDetailRoomComponent } from './update-detail-room/update-detail-room.component';
import { UpdateDetailNonroomComponent } from './update-detail-nonroom/update-detail-nonroom.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashTugashkPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [DashTugashkPage, UpdateDetailRoomComponent, UpdateDetailNonroomComponent],
  entryComponents: [UpdateDetailRoomComponent, UpdateDetailNonroomComponent]
})
export class DashTugashkPageModule {}
