import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import  {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { NonkamarPageRoutingModule } from './nonkamar-routing.module';

import { NonkamarPage } from './nonkamar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NonkamarPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [NonkamarPage]
})
export class NonkamarPageModule {}
