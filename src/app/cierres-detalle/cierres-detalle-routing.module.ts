import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CierresDetallePage } from './cierres-detalle.page';

const routes: Routes = [
  {
    path: '',
    component: CierresDetallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CierresDetallePageRoutingModule {}
