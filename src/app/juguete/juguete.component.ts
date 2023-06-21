import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-juguete',
  templateUrl: './juguete.component.html',
  styleUrls: ['./juguete.component.css']
})
export class JugueteComponent {

  juguete:any = {};


  constructor( private activatedRoute: ActivatedRoute,
              private _productosService: ProductosService ) { 

    this.activatedRoute.params.subscribe( params =>{
      this.juguete = this._productosService.getProducto( params['id'] );
    } )

  }

}
