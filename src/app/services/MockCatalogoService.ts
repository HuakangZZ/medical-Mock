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
            imagenUrl: 'assets/Producto1.png'
          },
          {
            id: 2,
            nombre: 'Tónico Reafirmante',
            descripcion: 'Descripción del producto 2',
            precio: 15.75,
            imagenUrl: 'assets/Producto2.png'
          },
          {
            id: 3,
            nombre: 'Producto 3',
            descripcion: 'Descripción del producto 3',
            precio: 20.5,
            imagenUrl: 'assets/Producto3.png'
          },
      
          {
            id: 4,
            nombre: 'Producto 4',
            descripcion: 'Descripción del producto 4',
            precio: 15.75,
            imagenUrl: 'assets/Producto4.png'
          },
          {
            id: 5,
            nombre: 'Producto 3',
            descripcion: 'Descripción del producto 3',
            precio: 20.5,
            imagenUrl: 'assets/Producto5.png'
          },
      
          {
            id: 6,
            nombre: 'Producto 4',
            descripcion: 'Descripción del producto 4',
            precio: 15.75,
            imagenUrl: 'assets/Producto6.png'
          },
      
          {
            id: 7,
            nombre: 'Producto 5',
            descripcion: 'Descripción del producto 1',
            precio: 20.5,
            imagenUrl: 'assets/Producto7.png'
          },
          {
            id: 8,
            nombre: 'Producto 2',
            descripcion: 'Descripción del producto 2',
            precio: 15.75,
            imagenUrl: 'assets/Producto8.png'
          },
          {
            id: 9,
            nombre: 'Producto 3',
            descripcion: 'Descripción del producto 3',
            precio: 20.5,
            imagenUrl: 'assets/Producto9.png'
          },
      
          {
            id: 10,
            nombre: 'Producto 5',
            descripcion: 'Descripción del producto 1',
            precio: 20.5,
            imagenUrl: 'assets/Producto10.png'
          },
          {
            id: 11,
            nombre: 'Producto 2',
            descripcion: 'Descripción del producto 2',
            precio: 15.75,
            imagenUrl: 'assets/Producto3.png'
          },
          {
            id: 12,
            nombre: 'Producto 3',
            descripcion: 'Descripción del producto 3',
            precio: 20.5,
            imagenUrl: 'assets/Producto2.png'
          },
      
          {
            id: 13,
            nombre: 'Producto 5',
            descripcion: 'Descripción del producto 1',
            precio: 20.5,
            imagenUrl: 'assets/Producto5.png'
          },
          {
            id: 14,
            nombre: 'Producto 2',
            descripcion: 'Descripción del producto 2',
            precio: 15.75,
            imagenUrl: 'assets/Producto4.png'
          },
          {
            id: 15,
            nombre: 'Producto 3',
            descripcion: 'Descripción del producto 3',
            precio: 20.5,
            imagenUrl: 'assets/Producto7.png'
          }
      
        ];
    

    return of(productos); // Simula una respuesta Observable de productos
  }

}