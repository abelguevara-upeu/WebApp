import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, tap } from 'rxjs';
import { Reserva } from '../models/entidades';
import { API_CONFIG } from '../../../../config/api.config';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {
  private url: string = `${API_CONFIG.baseUrl}/reserva`;

  constructor(private http:HttpClient) {
  }

  public getReservas(): Observable<Reserva[]> {
    return this.http.get<Reserva[]>(`${this.url}/readAll`).pipe(
      catchError((error: any) => {
        console.error('Error al obtener las reservas:', error);
        throw error; // Puedes lanzar el error nuevamente o manejarlo según tus necesidades.
      })
    );
  }

  getReserva(id: number): Observable<Reserva> {
    return this.http.get<Reserva>(`${this.url}/get/${id}`);
  }

  agregarReserva(objeto: Reserva): Observable<Reserva> {
    return this.http.post<Reserva>(`${this.url}/save`, objeto);
  }

  actualizarReserva(id: number, objeto: Reserva): Observable<Reserva> {
    return this.http.put<Reserva>(`${this.url}/put/${id}`, objeto);
  }

  eliminarReserva(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/delete/${id}`).pipe(
      tap(() => {
        // Realizar otras acciones después de una eliminación exitosa
        console.log('Reserva eliminado con éxito.');
        // Recargar la página
      }),catchError((error: any) => {
        console.error('Error al eliminar la reserva:', error);
        throw error;
      })
    );
  }
}
