import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  urlActividad: String = environment.baseurl + "producto/";
  constructor(
    private httpClient: HttpClient

  ) { }

  obtenerProductos(data) {
    return this.httpClient.get(this.urlActividad + "obtenerProductos", data);
  }

  crearProducto(data) {
    return this.httpClient.post(this.urlActividad + "crearProducto", data);
  }

  obtenerTiposProductos(data) {
    return this.httpClient.get(this.urlActividad + "obtenerTiposProductos", data);
  }
}
