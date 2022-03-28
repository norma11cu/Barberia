import { Router } from '@angular/router';
import { VentasService } from './../servicios/ventas.service';
import { ProductosService } from './../servicios/productos.service';
import { TipoToast, UtilsService } from './../servicios/utils.service';
import { AgregarProductoVentaPage } from './../agregar-producto-venta/agregar-producto-venta.page';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-generar-venta',
  templateUrl: './generar-venta.page.html',
  styleUrls: ['./generar-venta.page.scss'],
})
export class GenerarVentaPage implements OnInit {

  corte: any = {}
  barba: any = {}
  listProductos: any = []
  total: any = 0.0;
  constructor(private modalController: ModalController,
    private utilsService: UtilsService,
    private productosService: ProductosService,
    private ventasService: VentasService,
    private router: Router
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.obtenerProductos();
    }, 300);
  }

  agregarVenta(item) {
  }


  async abrirModal() {
    const modal = await this.modalController.create({
      component: AgregarProductoVentaPage,
      componentProps: {
        prop1: "valor 1",
      }
    })
    await modal.present()
    let data = await modal.onWillDismiss();
    if (data.data)
      this.agregarProducto(data.data)
  }

  agregarProducto(data) {
    this.total = 0.0
    this.listProductos.push(data)
    this.listProductos.forEach(element => {
      this.total = this.total + element.costo
    });
  }

  atras() {
    this.router.navigate(['/tabs/tabVentas'], { replaceUrl: true })
  }

  eliminarProducto(item, index) {
    this.total = 0.0
    this.listProductos.splice(index, 1);
    console.log(this.listProductos)
    this.listProductos.forEach(element => {
      this.total = this.total + element.costo
    });
  }

  //#region  WS
  obtenerProductos() {
    this.productosService.obtenerProductos({}).subscribe((data: any) => {
      if (data.estatus == 200) {
        this.corte = data.modelo[1]
        this.barba = data.modelo[0]
      }
    })
  }

  finalizarVenta() {
    if (this.listProductos.length > 0) {
      let postData = { listProductos: this.listProductos, ventaTotal: this.total }
      this.ventasService.guardarVenta(postData).subscribe((data: any) => {
        if (data.estatus == 200) {
          this.utilsService.MuestrasToast(TipoToast.Success, "Venta guardada exitosamente")
          this.router.navigate(['/tabs'], { replaceUrl: true })
        } else {
          this.utilsService.MuestrasToast(TipoToast.Error, data.mensaje)
        }
      })
    }else
        {
          this.utilsService.MuestrasToast(TipoToast.Info,"No tienes productos cargados")
        }
  }
  //#region 

}
