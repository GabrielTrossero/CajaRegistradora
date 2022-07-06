import { Component } from '@angular/core';
import { Producto } from './models/productos.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  arrComida: Producto[];
  arrBebida: Producto[];
  arrProductosSelecc: Producto[];

  constructor() {
    this.arrComida = [
      new Producto('Hamburgesa', 'https://images.aws.nestle.recipes/resized/f10d69e7fede5cd6200a8ddd41b3cb68_hamburguesa-parrillera_708_600.jpg', 950),
      new Producto('Pizza', 'https://www.laespanolaaceites.com/wp-content/uploads/2019/06/pizza-con-chorizo-jamon-y-queso-1080x671.jpg', 1200),
      new Producto('Fideos', 'https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2018/11/recetas-de-pastas-faciles-y-rapidas.jpg', 800),
    ]

    this.arrBebida = [
      new Producto('Fernet', 'https://www.cronica.com.ar/export/sites/cronica/img/2021/10/27/fernet_branca.jpg_199130362.jpg', 400),
      new Producto('Gancia', 'https://http2.mlstatic.com/D_NQ_NP_694141-MLA46897400670_072021-O.webp', 370),
      new Producto('Cerveza', 'https://cloudfront-us-east-1.images.arcpublishing.com/infobae/VYDOZSUOTZCHBPB5PIKMKAM74E.jpg', 350),
    ]

    this.arrProductosSelecc = [];
  }

  onProductoSeleccionado($event) {
    const productoEncontrado = this.arrProductosSelecc.find(producto => producto.nombre === $event.nombre);

    if (productoEncontrado) {
      productoEncontrado.cantidad++;
    }
    else{
      $event.cantidad++;
      this.arrProductosSelecc.push($event);
    }
  }

}
