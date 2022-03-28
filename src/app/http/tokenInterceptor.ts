import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';
import { Observable, throwError, from } from 'rxjs';
import { map, catchError, switchMap, finalize } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class TokenInterceptor implements HttpInterceptor {

  isLoading: boolean = false;
  vigenciaToken = 60; //valor en minutos
  isLoadingForToken = false;
  token;
  msj = ""
  duration = 5000
  veces = 0;
  constructor(
    public loadingController: LoadingController,

  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let request = req;
    this.msj = ""
    this.duration = 5000;
    this.loader();

    return next.handle(request).pipe(
      catchError(err => {
        this.closeLoader();
        if (err instanceof HttpErrorResponse) {
          switch ((<HttpErrorResponse>err).status) {
            case 401:
              console.log("401")
            default:
              return throwError(err);
          }
        } else {
          return throwError(err);
        }
      }),
      finalize(() => {
        this.closeLoader();
      })
    )
  }

  loader() {
    this.loadingController.getTop().then(hasLoading => {
      //console.log(" loader hasLoading", hasLoading)
      if (!hasLoading) {
        this.veces++
        //console.log("abriendo loader", this.veces)
        this.loadingController.create({
          spinner: 'circular',
          translucent: true,
          message: this.msj,
          cssClass: 'my-loader-class',
          duration: 5000
        }).then(loading => {

          loading.present()
        })
      }
    })
  }

  closeLoader() {
    this.loadingController.getTop().then(hasLoading => {
      //console.log(" closeLoader hasLoading", hasLoading)
      if (hasLoading) {
        this.veces--;
        //console.log("cerrando loader", this.veces)
        this.loadingController.dismiss();
      }
    })
  }

}