import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarProductoVentaPage } from './agregar-producto-venta.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarProductoVentaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarProductoVentaPageRoutingModule {}
