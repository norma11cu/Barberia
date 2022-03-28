import { AlertController } from '@ionic/angular';
import { ProductosService } from './../servicios/productos.service';
import { NavigationExtras, Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab-config.page.html',
  styleUrls: ['tab-config.page.scss']
})
export class TabConfigPage {

  listProductos = []

  constructor(
    private router:Router,
    private productosService:ProductosService,
    private alertController: AlertController
  ) {
    setTimeout(() => {
      this.obtenerProductos();
    }, 300);

  }

  lanzarProductos(){
    this.router.navigate(['tabs/productos'],{replaceUrl:true})
  }

  obtenerProductos(){
    this.productosService.obtenerProductos({idProducto:0}).subscribe((data:any)=>{
        if(data.estatus==200){
          this.listProductos = data.modelo_1;
        }
    })
  }

  lanzarEditar(item){
    let navigationExtras: NavigationExtras = {
      state: {
        producto: item
      },
      replaceUrl:true
    }
    
    ;
    this.router.navigate(['tabs/productos'],navigationExtras)
  }

 async onEliminar(){

    const alert = await this.alertController.create({
      header: 'Mensaje',
      message: 'Estas seguro que deseas eliminar el registro',
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
        
          }
        }
      ]
    });

    await alert.present();
 }

  eliminar(){
    
  }
  

}
