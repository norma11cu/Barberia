import { Injectable } from '@angular/core';
import { AlertController, Platform, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(
    public toastController: ToastController,
    private alertController: AlertController,
    private platform: Platform,
    
  ) { }

  async MuestrasToast(tipoToast: TipoToast, mensaje) {
    const toast = await this.toastController.create({
      message: mensaje,
      position: 'bottom',
      color: tipoToast,
      duration: 2000
    });
    toast.present();
  }

  notificaError(mensaje?: string) {
    this.MuestrasToast(TipoToast.Warning, mensaje || "Espere un momento y vuelva a intentarlo")
  }


  async presentAlert(mensaje?: string) {
    const alert = await this.alertController.create({
      header: '',
      subHeader: mensaje,
      message: '',
      buttons: ['Aceptar']
    });

    await alert.present();
  }

}

export enum TipoToast {
  Success = "tertiary",
  Warning = "warning",
  Info = "tertiary",
  Error = "secondary",
}