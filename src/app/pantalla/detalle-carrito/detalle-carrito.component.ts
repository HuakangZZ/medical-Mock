import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-detalle-carrito',
  templateUrl: './detalle-carrito.component.html',
  styleUrls: ['./detalle-carrito.component.css']})
export class DetalleCarritoComponent implements OnInit{

  @Input() modal: NgbModal | any;
    constructor(  private router: Router) {}
    platosSeleccionados: any[] = [];
    ngOnInit() {


    }

}