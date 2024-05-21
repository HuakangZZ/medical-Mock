import { Component, OnInit } from '@angular/core';
import { MockProductoService } from '../services/MockCatalogoService';


@Component({
  selector: 'app-pantalla',
  templateUrl: './pantalla.component.html',
  styleUrl: './pantalla.component.css'
})
export class PantallaComponent implements OnInit {
  showFiller = false;
  productoList!:any;
  constructor(private productoService: MockProductoService){}
  ngOnInit(): void {
      this.cargarDatosEnProductos()
  }

  cargarDatosEnProductos(){
    this.productoService.obtenerProductos().subscribe(data =>{
      this.productoList = data;
    })
  }
}