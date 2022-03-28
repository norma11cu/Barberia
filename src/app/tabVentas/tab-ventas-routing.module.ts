import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {  TabVentasPage } from './tab-ventas.page';

const routes: Routes = [
  {
    path: '',
    component: TabVentasPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabVentasPageRoutingModule {}
