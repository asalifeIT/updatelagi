import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import  {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TugashkPageRoutingModule } from './tugashk-routing.module';
import { TugashkPage } from './tugashk.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TugashkPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [TugashkPage]
})
export class TugashkPageModule {}
