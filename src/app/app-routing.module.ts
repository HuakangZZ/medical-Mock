import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PantallaComponent } from './pantalla/pantalla.component';
import { HeaderComponent } from './pantalla/header/header.component';
import { DetalleCarritoComponent } from './pantalla/detalle-carrito/detalle-carrito.component';

const routes: Routes = [
  {path : 'pantalla', component: PantallaComponent},
  {path : 'header', component: HeaderComponent},
  {path : 'detalle-carrito', component: DetalleCarritoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
