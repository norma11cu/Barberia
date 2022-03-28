import { LoginService } from './../servicios/login.service';
import { TipoToast, UtilsService } from './../servicios/utils.service';
import { Router, Routes } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private router: Router,
    private utilsService: UtilsService,
    private loginService: LoginService
  ) { }

  ngOnInit() {
  }

  alIniciar() {
    this.loginService.validarCredenciales({usuario:'admon' , password:'_admon$'}).subscribe((data: any) => {
      if (data.estatus == 200) {
        this.router.navigate(['/tabs'] ,{replaceUrl:true})
      } else {
        this.utilsService.MuestrasToast(TipoToast.Error, "Espera un momento y vuelva a intentarlo")
      }
    }, err => {
      console.log(err.message)
      this.utilsService.MuestrasToast(TipoToast.Error, err.message)
    })


  }

}
