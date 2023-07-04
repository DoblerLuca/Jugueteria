import { Component } from '@angular/core';
import { jugueteCarrito } from '../jugueteCarrito';


@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {
  listaJuguetesCarrito: jugueteCarrito[] | undefined;

  ngOnInit(): void{
    let carritoStorage = localStorage.getItem("carrito") as string;
    let carrito = JSON.parse(carritoStorage);
    this.listaJuguetesCarrito = carrito;
  }

  vaciarCarrito(){
    localStorage.clear();
    this.listaJuguetesCarrito = [];
  }
}
