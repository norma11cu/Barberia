import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { ProductosService } from '../servicios/productos.service';
import { UtilsService } from '../servicios/utils.service';
import { VentasService } from '../servicios/ventas.service';

@Component({
  selector: 'app-cierres-detalle',
  templateUrl: './cierres-detalle.page.html',
  styleUrls: ['./cierres-detalle.page.scss'],
})
export class CierresDetallePage implements OnInit {
  listVentas = []
  cierre;

  constructor(
    private ventasService: VentasService,
    private router: Router,
    private route: ActivatedRoute
  ) { 
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.cierre = this.router.getCurrentNavigation().extras.state.cierre;
        setTimeout(() => {
          this.obtenerVentasPorCierre();
        }, 300);
      }
    });
  }

  ngOnInit(): void {

  }

  atras() {
    this.router.navigate(['/tabs/tabCierres'], { replaceUrl: true })
  }

    //#region  WS
  obtenerVentasPorCierre() {
    this.ventasService.obtenerVentasPorCierre({ idCierre: this.cierre.idCierreDiario }).subscribe((data: any) => {
      if (data.estatus == 200) {
        this.listVentas = data.modelo
      }
    })
  }
  //#endregion
}
