import { TipoToast, UtilsService } from './../servicios/utils.service';
import { AlertController } from '@ionic/angular';
import { VentasService } from './../servicios/ventas.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-venta-detalle',
  templateUrl: './venta-detalle.page.html',
  styleUrls: ['./venta-detalle.page.scss'],
})
export class VentaDetallePage implements OnInit {

  venta: any
  listProductos: any = []
  total: any = 0.0;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ventasService: VentasService,
    private alertController: AlertController,
    private utilsService: UtilsService
  ) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.venta = this.router.getCurrentNavigation().extras.state.venta;
        console.log(this.venta)
      }
    });
  }

  ngOnInit() {
    console.log("venta", this.venta)
    setTimeout(() => {
      this.obtenerVentaDetalle()
    }, 300)
  }

  atras() {
    this.router.navigate(['/tabs/tabVentas'], { replaceUrl: true })
  }

  async eliminar(item) {
    if (item.idCierre > 0) {
      const alert = await this.alertController.create({
        header: 'Mensaje',
        message: 'Este producto ya no se puede eliminar, ya fue considerado en un cierre',
        buttons: [
          {
            text: 'Aceptar',
            handler: () => {

            }
          }
        ]
      });
      await alert.present();
    } else {
      this.actualizarEstadoVentaDetalle(item)
    }

  }

  obtenerVentaDetalle() {
    this.ventasService.obtenerVentaDetalle({ idVenta: this.venta.idVentas }).subscribe((data: any) => {
      if (data.estatus == 200) {
        this.total = 0;
        this.listProductos = data.modelo
        this.listProductos.forEach(element => {
          this.total = this.total + element.monto
        });
      }
    })
  }

  actualizarEstadoVentaDetalle(item) {
    this.ventasService.actualizarEstadoVentaDetalle({ idVentaDetalle: item.idVentasDetalle }).subscribe((data: any) => {
      this.utilsService.MuestrasToast(TipoToast.Success, data.mensaje)
      this.obtenerVentaDetalle();
    }, err => { this.utilsService.MuestrasToast(TipoToast.Success, err) })
  }

}
