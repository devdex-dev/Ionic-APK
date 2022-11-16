import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeliveryPageRoutingModule } from './delivery-routing.module';

import { DeliveryPage } from './delivery.page';
import { DeliveryComponent } from 'src/app/components/delivery/delivery.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeliveryPageRoutingModule
  ],
  declarations: [
    DeliveryPage,
    DeliveryComponent
  ]
})
export class DeliveryPageModule {}
