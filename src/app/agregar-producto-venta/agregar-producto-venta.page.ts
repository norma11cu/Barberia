import { ModalController } from '@ionic/angular';
import { ProductosService } from './../servicios/productos.service';
import { Component, OnInit } from '@angular/core';
import { zip } from 'rxjs';

@Component({
  selector: 'app-agregar-producto-venta',
  templateUrl: './agregar-producto-venta.page.html',
  styleUrls: ['./agregar-producto-venta.page.scss'],
})
export class AgregarProductoVentaPage implements OnInit {

  listProductos = []
  filtro = []
  constructor(
    private productosService: ProductosService,
    private modalController: ModalController
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.obtenerProductos()
    }, 300);
  }

  obtenerProductos() {
    this.productosService.obtenerProductos({}).subscribe((data: any) => {
      if (data.estatus == 200) {
        this.listProductos = data.modelo_1
        this.filtro = data.modelo_1
      
        console.log(this.listProductos)
      }
    })
  }

  filtrar(event) {
    console.log( event.target.value)
    var searchTerm = event.target.value;
    this.filtro = this.listProductos.filter(x => {
      return x.descripcion.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    })
  }

  cerrar() {
    this.modalController.dismiss();
  }
  alSeleccionarProducto(item) {
    this.modalController.dismiss(item)
  }

}
