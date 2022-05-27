import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import  {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { KamarPageRoutingModule } from './kamar-routing.module';
import { KamarPage } from './kamar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KamarPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [KamarPage]
})
export class KamarPageModule {}
