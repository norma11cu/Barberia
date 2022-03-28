import { TabVentasPage } from './tab-ventas.page';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabVentasPageRoutingModule } from './tab-ventas-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabVentasPageRoutingModule
  ],
  declarations: [TabVentasPage]
})
export class TabVentasPageModule {}
