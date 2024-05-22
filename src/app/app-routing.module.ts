import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PantallaComponent } from './pantalla/pantalla.component';
import { HeaderComponent } from './pantalla/header/header.component';
import { DetalleCarritoComponent } from './pantalla/detalle-carrito/detalle-carrito.component';
import { LoginComponent } from './pantalla/login/login.component';

const routes: Routes = [
  {path : 'pantalla', component: PantallaComponent},
  {path : 'header', component: HeaderComponent},
  {path : 'detalle-carrito', component: DetalleCarritoComponent},
  {path:  'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
