import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class VentasService {
  urlActividad: String = environment.baseurl + "venta/";
  constructor(
    private httpClient: HttpClient

  ) { }

  obtenerVentas(data) {
    return this.httpClient.get(this.urlActividad + "obtenerVentas", data);
  }

  guardarVenta(data) {
    return this.httpClient.post(this.urlActividad + "guardarVenta", data);
  }

  guardarVentaDetalle(data) {
    return this.httpClient.post(this.urlActividad + "guardarVentaDetalle", data);
  }

  obtenerVentaDetalle(data) {
    return this.httpClient.post(this.urlActividad + "obtenerVentaDetalle", data);
  }

  actualizarEstadoVentaDetalle(data) {
    return this.httpClient.post(this.urlActividad + "actualizarEstadoVentaDetalle", data);
  }

  obtenerVentasPorCierre(data) {
    return this.httpClient.post(this.urlActividad + "obtenerVentasPorCierre", data);
  }
}
