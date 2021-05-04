import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BiopicPageRoutingModule } from './biopic-routing.module';

import { BiopicPage } from './biopic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BiopicPageRoutingModule
  ],
  declarations: [BiopicPage]
})
export class BiopicPageModule {}
