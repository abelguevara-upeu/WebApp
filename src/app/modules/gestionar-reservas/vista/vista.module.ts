import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { VistaRoutingModule } from './vista-routing.module';

import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { EditarReservaComponent } from './pages/editar/editar-reserva.component';
import { InsertarReservaComponent } from './pages/insertar/insertar-reserva.component';
import { ListaReservasComponent } from './pages/lista/lista-reservas.component';



@NgModule({
  declarations: [
    ListaReservasComponent,
    InsertarReservaComponent,
    EditarReservaComponent
  ],
  imports: [
    CommonModule,
    VistaRoutingModule,
    FormsModule,
    BsDropdownModule.forRoot(),
  ]
})
export class VistaModule { }
