import { TipoToast, UtilsService } from './../servicios/utils.service';
import { CierresService } from './../servicios/cierres.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ProductosService } from '../servicios/productos.service';

@Component({
  selector: 'app-tab-cierres',
  templateUrl: 'tab-cierres.page.html',
  styleUrls: ['tab-cierres.page.scss']
})
export class TabCierresPage {

  listCierres = []
  constructor(
    private router: Router,
    private productosService: ProductosService,
    private alertController: AlertController,
    private cierresService: CierresService,
    private utilsService: UtilsService
  ) { }


  ngOnInit(): void {
    setTimeout(() => {
      this.obtenerCierres();
    }, 300);

  }

  async onGenerarCierre() {

    const alert = await this.alertController.create({

      header: '¿Generar cierre?',
      message: 'Es recomendable generar un cierre cuando haz terminado tu jornada laboral',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Aceptar',
          handler: () => {
            this.generarCierre();
          }
        }
      ]
    });
    await alert.present();
  }

  //#region  WS
  generarCierre() {
    this.cierresService.generarCierre({}).subscribe((data: any) => {
      if (data.estatus == 200) {
        this.utilsService.MuestrasToast(TipoToast.Success, "Cierre generado exitosamente")
        this.obtenerCierres();
      } else {
        this.utilsService.MuestrasToast(TipoToast.Error, data.mensaje)
      }
    })
  }

  obtenerCierres() {
    this.cierresService.obtenerCierre({}).subscribe((data: any) => {
      if (data.estatus == 200) {
        this.listCierres = data.modelo;
      }
    })
  }

  lanzarVentasCierre(item) {

    this.router.navigate(['tabs/cierres-detalle'], {
      state: {
        cierre: item
      },
    })


  }
  //#endregion

}
