import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  urlActividad: String = environment.baseurl + "login/";
  constructor( private httpClient: HttpClient) { }

  validarCredenciales(data) {
    return this.httpClient.post(this.urlActividad + "validarCredenciales", data);
  }
}
