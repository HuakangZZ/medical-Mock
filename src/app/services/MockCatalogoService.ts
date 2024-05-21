import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Producto } from '../models/Producto.model';
 

@Injectable({
  providedIn: 'root'
})
export class MockProductoService {
  
  eliminarProducto(id: number) {
    throw new Error('Method not implemented.');
  }

  constructor() { }

obtenerProductos(): Observable<Producto[]> {
    const productos: Producto[] = [
        {
            id: 1,
            nombre: 'Espuma de limpieza',
            descripcion: 'Descripción del producto 1',
            precio: 20.5,
            imagenUrl: 'assets/Producto1.png',
            cantidad:0
          },
          {
            id: 2,
            nombre: 'Tónico Reafirmante',
            descripcion: 'Descripción del producto 2',
            precio: 15.75,
            imagenUrl: 'assets/Producto2.png',
            cantidad:0
          },
          {
            id: 3,
            nombre: 'Contorno de ojos',
            descripcion: 'Descripción del producto 3',
            precio: 20.5,
            imagenUrl: 'assets/Producto3.png',
            cantidad:0
          },
      
          {
            id: 4,
            nombre: 'Serum Tensor',
            descripcion: 'Descripción del producto 4',
            precio: 15.75,
            imagenUrl: 'assets/Producto4.png',
            cantidad:0
          },
          {
            id: 5,
            nombre: 'Crema Matificante',
            descripcion: 'Descripción del producto 3',
            precio: 20.5,
            imagenUrl: 'assets/Producto5.png',
            cantidad:0
          },
      
          {
            id: 6,
            nombre: 'Serum Redensity',
            descripcion: 'Descripción del producto 4',
            precio: 15.75,
            imagenUrl: 'assets/Producto6.png',
            cantidad:0
          },
      
          {
            id: 7,
            nombre: 'Crema Descongestiva',
            descripcion: 'Descripción del producto 1',
            precio: 20.5,
            imagenUrl: 'assets/Producto7.png',
            cantidad:0
          },
          {
            id: 8,
            nombre: 'Ampollas',
            descripcion: 'Descripción del producto 2',
            precio: 15.75,
            imagenUrl: 'assets/Producto8.png',
            cantidad:0
          },
          {
            id: 9,
            nombre: 'Crema Humectante',
            descripcion: 'Descripción del producto 3',
            precio: 20.5,
            imagenUrl: 'assets/Producto9.png',
            cantidad:0
          },
      
          {
            id: 10,
            nombre: 'Crema Humectante',
            descripcion: 'Descripción del producto 1',
            precio: 20.5,
            imagenUrl: 'assets/Producto10.png',
            cantidad:0
          },
          {
            id: 11,
            nombre: 'Contorno de Ojos',
            descripcion: 'Descripción del producto 2',
            precio: 15.75,
            imagenUrl: 'assets/Producto3.png',
            cantidad:0
          },
          {
            id: 12,
            nombre: 'Tónico Reafirmante',
            descripcion: 'Descripción del producto 3',
            precio: 20.5,
            imagenUrl: 'assets/Producto2.png',
            cantidad:0
          },
      
          {
            id: 13,
            nombre: 'Crema Matificante',
            descripcion: 'Descripción del producto 1',
            precio: 20.5,
            imagenUrl: 'assets/Producto5.png',
            cantidad:0
          },
          {
            id: 14,
            nombre: 'Serum Tensor',
            descripcion: 'Descripción del producto 2',
            precio: 15.75,
            imagenUrl: 'assets/Producto4.png',
            cantidad:0
          },
          {
            id: 15,
            nombre: 'Crema Descongestiva',
            descripcion: 'Descripción del producto 3',
            precio: 20.5,
            imagenUrl: 'assets/Producto7.png',
            cantidad:0
          }
      
        ];
    

    return of(productos); // Simula una respuesta Observable de productos
  }

}