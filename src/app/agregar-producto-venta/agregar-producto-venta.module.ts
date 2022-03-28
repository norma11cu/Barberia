import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarProductoVentaPageRoutingModule } from './agregar-producto-venta-routing.module';

import { AgregarProductoVentaPage } from './agregar-producto-venta.page';

@NgModule({
  imports: [

    CommonModule,
    FormsModule,
    IonicModule,
    AgregarProductoVentaPageRoutingModule
  ],
  declarations: [AgregarProductoVentaPage]
})
export class AgregarProductoVentaPageModule {}
