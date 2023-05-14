import { Component } from '@angular/core';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  productos = this._productosService.getProductos();

  constructor(private _productosService: ProductosService){
    console.log('constructor');
    console.log(this.productos)
    
  }

  

}
