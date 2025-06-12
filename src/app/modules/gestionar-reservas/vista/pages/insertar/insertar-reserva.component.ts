
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Cliente, Hotel, Reserva, Sucursal, Vuelo } from '../../../core/models/entidades';
import { ClienteService } from '../../../core/service/cliente.service';
import { HotelService } from '../../../core/service/hotel.service';
import { ReservaService } from '../../../core/service/reserva.service';
import { SucursalService } from '../../../core/service/sucursal.service';
import { VueloService } from '../../../core/service/vuelo.service';



@Component({
  selector: 'app-insertar-reserva',
  templateUrl: './insertar-reserva.component.html'
})

export class InsertarReservaComponent implements OnInit {

  nuevaReserva: Reserva = new Reserva();

  clientes: Cliente[] = [];
  hoteles: Hotel[] = [];
  sucursales: Sucursal[] = [];
  vuelos: Vuelo[] = [];


  constructor(
    private reservasService: ReservaService,
    private clienteService: ClienteService,
    private hotelService: HotelService,
    private sucursalService: SucursalService,
    private vueloService: VueloService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.getClientes();
    this.getHoteles();
    this.getSucursales();
    this.getVuelos();
  }

  getClientes(): void {
    this.clienteService.getClientes().subscribe(

      (data: Cliente[]) =>  {
        console.log(data);
        this.clientes = data;
      }

    );
    console.log('Datos clientes: ', this.clientes)
  }

  getHoteles(): void {
    this.hotelService.getHoteles().subscribe(
      (data: Hotel[]) =>  {
        console.log(data);
        this.hoteles = data;
      }
    );
  }

  getSucursales(): void {
    this.sucursalService.getSucursales().subscribe(
      (data: Sucursal[]) =>  {
        console.log(data);
        this.sucursales = data;
      }
    );
  }

  getVuelos(): void {
    this.vueloService.getVuelos().subscribe(
      (data: Vuelo[]) =>  {
        console.log(data);
        this.vuelos = data;
      }
    );
  }

  agregarReserva(): void {
    Swal.fire(
      'Good job!',
      'You clicked the button!',
      'success'
    )
      console.log('Datos a enviar:', this.nuevaReserva);

    this.reservasService.agregarReserva(this.nuevaReserva)
      .subscribe(
        (obj) => {
          // Manejar el éxito
          console.log('Proyección agregada con éxito:', obj);
          this.router.navigate(['/home/reservas/gestionar/insertarReserva'], { replaceUrl: true });
        },
        (error) => {
          // Manejar el error
          console.error('Error al agregar la reserva:', error);

          // Imprimir detalles adicionales del error en la consola
          if (error instanceof HttpErrorResponse) {
            console.error('Detalles del error:', error.error);
          }
        }
      );
  }

}
