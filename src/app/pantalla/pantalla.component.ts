import { Component, OnInit ,  ViewChild ,ElementRef, TemplateRef } from '@angular/core';
import { MockProductoService } from '../services/MockCatalogoService';
import { Observable, Subject, Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Producto } from '../models/Producto.model';


export interface Carrito {
  name: string
  description: string
  quantity: number
  amount: number
}


@Component({
  selector: 'app-pantalla',
  templateUrl: './pantalla.component.html',
  styleUrl: './pantalla.component.css'
})
export class PantallaComponent implements OnInit {
  showFiller = false;
  productoList!:Producto[];
  platos: Producto[] = [];
  cartItemCount: number = 0;
  itemCount: number = 0
  dataSource : Observable<Producto[]> | any;
  cantidadSeleccionada!: number;
  platosSeleccionados: Producto[] =[];
  platosSeleccionadosCarrito!: Producto[]
  searchTerm$ = new Subject<string>();
  
  @ViewChild('content') content!: TemplateRef<any>;
  @ViewChild('plato') slForm!: NgForm;
  @ViewChild('elementoFinal', { static: true }) elementoFinal!: ElementRef;

  platosItem: Producto[] = [];
  listadoFiltrado: Producto[] = [];
  
  
  constructor(private productoService: MockProductoService){}
  ngOnInit(): void {
      this.cargarDatosEnProductos();
  }

  cargarDatosEnProductos(){
    this.productoService.obtenerProductos().subscribe(data =>{
      this.productoList = data;
      this.listadoFiltrado = [...this.productoList];
    })
  }

  onAddItem(plato: any) {
    this.platosSeleccionadosCarrito = [];
  }

  contieneLaPalabra(messi:any) {
    let value = messi.value
    if (messi == null) {
      value = ""
    }
    this.listadoFiltrado = this.productoList.filter(producto =>{
      if (this.eliminarDiacriticos(producto.nombre).toLowerCase().includes(this.eliminarDiacriticos(value.toString().toLowerCase()))) {
        return true
      }
      return false
    })
  }
  

  aumentarCantidad(producto: Producto){
    producto.cantidad = producto.cantidad + 1;
  }

  restarCantidad(producto: Producto){
    if (producto.cantidad > 0) {
      producto.cantidad = producto.cantidad - 1;
    }
  }

  eliminarDiacriticos(texto:string) {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g,"");
}

}


