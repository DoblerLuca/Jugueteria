import { Component } from '@angular/core';
import { ProductosService } from '../productos.service';
import { Router } from '@angular/router';
import { Juguete } from '../juguetes';
import { jugueteCarrito } from '../jugueteCarrito';


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

  agregarCarrito(juguetes: Juguete, idx:number){
    let iCarrito: jugueteCarrito = {
      cod: idx,
      nombre: juguetes.nombre,
      precio: juguetes.precio,
      cantidad: 1
    }
    
    if(localStorage.getItem("carrito") === null){
      let carrito: jugueteCarrito[] = [];
      carrito.push(iCarrito);

      localStorage.setItem("carrito", JSON.stringify(carrito))
    }
    else{
      let carritoStorage = localStorage.getItem("carrito") as string;
      let carrito = JSON.parse(carritoStorage);
      let index = -1;
      for (let i=0; i<carrito.length; i++){
        let jugueteC: jugueteCarrito = carrito[i];
        if(iCarrito.cod === jugueteC.cod){
          index = i;
          break;
        }
      }
      if(index === -1){
        carrito.push(iCarrito);
        localStorage.setItem("carrito", JSON.stringify(carrito))
      }
      else{
        let jugueteCarrito: jugueteCarrito = carrito[index];
        jugueteCarrito.cantidad!++;
        carrito[index] = jugueteCarrito;
        localStorage.setItem("carrito", JSON.stringify(carrito))
      }
      
    }

    
  }

}
