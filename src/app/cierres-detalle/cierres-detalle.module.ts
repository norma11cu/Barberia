import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CierresDetallePageRoutingModule } from './cierres-detalle-routing.module';

import { CierresDetallePage } from './cierres-detalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CierresDetallePageRoutingModule
  ],
  declarations: [CierresDetallePage]
})
export class CierresDetallePageModule {}
