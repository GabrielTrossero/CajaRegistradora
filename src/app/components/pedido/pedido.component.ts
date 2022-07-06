import { Component, Input, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/productos.models';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  @Input() productosSelecc: Producto[];

  constructor() { }

  ngOnInit(): void {
  }

  calculaTotal() {
    let resultado = 0;

    for (let producto of this.productosSelecc) {
      resultado += producto.precio * producto.cantidad;
    }

    return resultado;
  }

  onClickBorrar(indice){
    if (this.productosSelecc[indice].cantidad === 1) {
      this.productosSelecc.splice(indice, 1);
    }
    else {
      this.productosSelecc[indice].cantidad--;
    }
  }

}
