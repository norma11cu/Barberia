import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CierresService {

  urlActividad: String = environment.baseurl + "cierre/";
  constructor(
    private httpClient: HttpClient

  ) { }

  generarCierre(data) {
    return this.httpClient.get(this.urlActividad + "generarCierre", data);
  }

  obtenerCierre(data) {
    return this.httpClient.get(this.urlActividad + "obtenerCierre", data);
  }

}