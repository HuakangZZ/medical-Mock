import { Component } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { MockProductoService } from '../../services/MockCatalogoService';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private router: Router, private authService: MockProductoService){}

  ROL!: string;

  validarRol(){
    if (this.ROL == 'ROLE_USER' || this.ROL == '' || this.ROL == null) {
      return false;
    }
    else {
      return true;
    }
  }

  validarSalir(){
    if (this.ROL != '' && this.ROL != null) {
      return true;
    }
    else {
      return false;
    }
  }

  validarLogin(){
    if (this.ROL == '' || this.ROL == null) {
      return true;
    }
    else {
      return false;
    }
  }

  login() {
    this.router.navigateByUrl('/login');
  }

  async reload() {
    this.router.navigateByUrl('/individual');
    await new Promise(resolve => setTimeout(resolve, 100)); // Espera 100 milisegundos
    window.document.defaultView?.location.reload();
  }

  logout(){
    swal.fire({
      title: '¿Desea salir de su cuenta?',
      text: "Se usuario se deslogeara.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Salir'
    })
    .then((result) => {
     if (result.isConfirmed) {
      this.authService.logout();
        swal.fire({
          title:'Su sesión ha expirado!',
          icon: 'success',
          confirmButtonColor: '##D2B4DE',
          confirmButtonText: 'OK'
        }).then((result) => {
          if (result.isConfirmed) {
            this.reload();
          }
        })
      }
    })
  }
}
