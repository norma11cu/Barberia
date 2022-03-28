import { UtilsService, TipoToast } from './../servicios/utils.service';
import { ProductosService } from './../servicios/productos.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {

  frmProductos: FormGroup;
  producto
  lstTiposProducto : []
  descTipoProducto ="Selecciona"
  idDescTipoProducto =""
  titulo="Agregar Producto"
  constructor(
    private router: Router,
    private route : ActivatedRoute,
    private formBuilder: FormBuilder,
    private productosService: ProductosService,
    private utilsService:UtilsService
  ) { 
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.producto = this.router.getCurrentNavigation().extras.state.producto;
       
      }
    });

  }

  ngOnInit() {
    this.initForm();
    setTimeout(() => {
      this.obtenerTiposProductos();
    }, 300);
  }

  atras() {
    console.log("atras")
    this.router.navigate(['tabs/tabConfg'], { replaceUrl: true })
  }

  initForm() {
    this.frmProductos = this.formBuilder.group({
      descripcion: ['', [Validators.required]],
      costo: ['', Validators.required],
      idTipoProducto: ['', Validators.required],
      idProducto:'0'
    });

    if(this.producto){
      setTimeout(()=>{
        console.log(this.producto)
        this.frmProductos.patchValue({
          descripcion: this.producto.descripcion,
          costo: this.producto.costo,
          idTipoProducto: this.producto.idTipoProducto,
          idProducto:this.producto.idProducto
        })
        this.descTipoProducto = this.producto.descTipoProducto
        this.idDescTipoProducto = this.producto.idTipoProducto
        this.titulo="Actualizar Producto"
      },0)

    }
  }

  get frmR() { return this.frmProductos.controls; }

  obtenerTiposProductos() {
    this.productosService.obtenerTiposProductos({idProducto:0}).subscribe((data: any) => {
      if(data.estatus==200){
        this.lstTiposProducto= data.modelo
      }
    })
  }

  guardarProducto() {
    if (this.frmProductos.valid) {
      this.productosService.crearProducto(this.frmProductos.value).subscribe((data: any) => {
          this.utilsService.MuestrasToast(TipoToast.Info, data.mensaje)
          this.router.navigate(['tabs/tabConfg'], { replaceUrl: true })
      },err=>{ this.utilsService.MuestrasToast(err.message,TipoToast.Error)})
    }
  }


}
