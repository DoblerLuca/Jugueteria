import { Component } from '@angular/core';
import { ProductosService } from '../productos.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  productos = this._productosService.getProductos();

  constructor(private _productosService: ProductosService,
              private router:Router
              ){
    //console.log('constructor');
    //console.log(this.productos)
    
  }

  verJuguetes(idx:number){
    this.router.navigate( ['/juguetes', idx] );
  }


}
