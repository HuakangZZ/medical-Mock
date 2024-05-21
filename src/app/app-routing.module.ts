import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PantallaComponent } from './pantalla/pantalla.component';
import { HeaderComponent } from './pantalla/header/header.component';

const routes: Routes = [
  {path : 'pantalla', component: PantallaComponent},
  {path : 'header', component: HeaderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
