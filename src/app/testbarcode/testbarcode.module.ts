import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import  {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { TestbarcodePageRoutingModule } from './testbarcode-routing.module';

import { TestbarcodePage } from './testbarcode.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestbarcodePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [TestbarcodePage]
})
export class TestbarcodePageModule {}
