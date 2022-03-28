import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'tabVentas',
        loadChildren: () => import('../tabVentas/tab-ventas.module').then(m => m.TabVentasPageModule),
        
      },
      {
        path: 'tabCierres',
        loadChildren: () => import('../tabCierres/tab-cierres.module').then(m => m.TabCierresPageModule)
      },
      {
        path: 'tabConfg',
        loadChildren: () => import('../tabConfig/tab-config.module').then(m => m.TabConfigPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tabVentas',
        pathMatch: 'full'
      },
      {
        path: 'productos',
        loadChildren: () => import('../productos/productos.module').then( m => m.ProductosPageModule)
      },
      {
        path: 'generar-venta',
        loadChildren: () => import('../generar-venta/generar-venta.module').then( m => m.GenerarVentaPageModule)
      },
      {
        path: 'venta-detalle',
        loadChildren: () => import('../venta-detalle/venta-detalle.module').then( m => m.VentaDetallePageModule)
      },
      {
        path: 'cierres-detalle',
        loadChildren: () => import('../cierres-detalle/cierres-detalle.module').then( m => m.CierresDetallePageModule)
      },
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
