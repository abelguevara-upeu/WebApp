import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarReservaComponent } from './pages/editar/editar-reserva.component';
import { InsertarReservaComponent } from './pages/insertar/insertar-reserva.component';
import { ListaReservasComponent } from './pages/lista/lista-reservas.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'listarReservas', component: ListaReservasComponent},
      { path: 'insertarReserva', component: InsertarReservaComponent},
      { path: 'editarReserva/:id', component: EditarReservaComponent}, // Agregué ':id' para indicar que la ruta espera un parámetro
      { path: '', redirectTo: 'listarReservas', pathMatch: 'full'},
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class VistaRoutingModule { }

