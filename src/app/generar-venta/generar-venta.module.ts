import { AgregarProductoVentaPageModule } from './../agregar-producto-venta/agregar-producto-venta.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GenerarVentaPageRoutingModule } from './generar-venta-routing.module';

import { GenerarVentaPage } from './generar-venta.page';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  
  
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GenerarVentaPageRoutingModule,
    AgregarProductoVentaPageModule
  ],
  declarations: [GenerarVentaPage]
})
export class GenerarVentaPageModule {}
