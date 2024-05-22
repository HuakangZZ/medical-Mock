import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './pantalla/sidebar/sidebar.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { MatDrawer } from '@angular/material/sidenav';
import { MatDrawerContainer } from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import { PantallaComponent } from './pantalla/pantalla.component';
import { HeaderComponent } from './pantalla/header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { DetalleCarritoComponent } from './pantalla/detalle-carrito/detalle-carrito.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './pantalla/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    PantallaComponent,
    HeaderComponent,
    DetalleCarritoComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    MatButtonModule,
    MatDrawer,
    MatDrawerContainer,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    NgbModule,
    ReactiveFormsModule,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
