import { Component, OnInit } from '@angular/core';
import { Reserva } from '../../../core/models/entidades';
import { ReservaService } from '../../../core/service/reserva.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-lista-reservas',
  templateUrl: './lista-reservas.component.html'
})

export class ListaReservasComponent implements OnInit{
  // proyecciones: Proyeccion[] = [];
  // nuevaProyeccion: Proyeccion = new Proyeccion();
  // facultad: Facultad[] = [];
  // escuela: EscuelaRelacionada[] = [];
  // semestre: SemestreRelacionado[] = [];
  // ciclo: Ciclo[] = [];
  // curso: Curso[] = [];

  reservas: Reserva[] = [];

  constructor(
    private reservaService: ReservaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getReservas();
  }

  //gets
  getReservas(): void {
    this.reservaService.getReservas().subscribe(
      (data: Reserva[]) =>  {
        console.log(data);
        this.reservas = data;
      }
    );
  }

  eliminarReserva(id: number): void {
    if (confirm('¿Estás seguro de que quieres eliminar este libro?')) {
      this.reservaService.eliminarReserva(id).subscribe(
        () => {
          this.getReservas();
          //window.location.reload();
          this.router.navigate(['/home/reservas/gestionar/listarReservas'], { replaceUrl: true });
      },
        (error) => {
          console.error('Error al eliminar el libro:', error);
          if (error instanceof HttpErrorResponse && error.error) {
            console.error('Detalles del error:', error.error);
          }
        }
      );
    }
  }

  //funciones
  seleccionarAccion(event: any, reserva: Reserva): void {
    const accionSeleccionada = event.target.value;

    switch (accionSeleccionada) {
      case 'editar':
        break;
      case 'eliminar':
        Swal.fire(
          'Good job!',
          'You clicked the button!',
          'success'
        )
        this.eliminarReserva(reserva.id);
        break;
      default:
        break;
    }
  }

}
