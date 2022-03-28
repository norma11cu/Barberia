import { NavigationExtras, Router } from '@angular/router';
import { HOST_ATTR } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../servicios/productos.service';
import { UtilsService } from '../servicios/utils.service';
import { VentasService } from '../servicios/ventas.service';

@Component({
  selector: 'app-tab-ventas',
  templateUrl: 'tab-ventas.page.html',
  styleUrls: ['tab-ventas.page.scss']
})
export class TabVentasPage {

  listVentas = []

  constructor(

    private utilsService: UtilsService,
    private productosService: ProductosService,
    private ventasService: VentasService,
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  ionViewWillEnter() {
    setTimeout(() => {
      this.obtenerVentas();
    }, 300);
  }

  detalleVenta(venta) {
    let navigationExtras: NavigationExtras = {
      state: {
        venta: venta
      },
      replaceUrl:true
    };
    this.router.navigate(['tabs/venta-detalle'],navigationExtras)
  }

  lanzarGenerarVenta() {
    this.router.navigate(['tabs/generar-venta'], { replaceUrl: true })
  }

  //#region  WS
  obtenerVentas() {
    this.ventasService.obtenerVentas({}).subscribe((data: any) => {
      if (data.estatus == 200) {
        this.listVentas = data.modelo
      }
    })
  }
  //#endregion
}
