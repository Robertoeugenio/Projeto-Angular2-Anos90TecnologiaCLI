import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { ListaClienteComponent } from './lista-cliente/lista-cliente.component';
import { RountingModule } from './app.router';


@NgModule({
  declarations: [
    AppComponent,
    ListaClienteComponent,
    MenuComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RountingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
