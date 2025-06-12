import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, tap } from 'rxjs';
import { Hotel } from '../models/entidades';
import { API_CONFIG } from '../../../../config/api.config';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  private url: string = `${API_CONFIG.baseUrl}/hotel`;

  constructor(private http:HttpClient) {
  }

  public getHoteles(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(`${this.url}/readAll`).pipe(
      catchError((error: any) => {
        console.error('Error al obtener los hoteles:', error);
        throw error; // Puedes lanzar el error nuevamente o manejarlo según tus necesidades.
      })
    );
  }

  getHotel(id: number): Observable<Hotel> {
    return this.http.get<Hotel>(`${this.url}/get/${id}`);
  }

  agregarHotel(objeto: Hotel): Observable<Hotel> {
    return this.http.post<Hotel>(`${this.url}/save`, objeto);
  }

  actualizarHotel(id: number, objeto: Hotel): Observable<Hotel> {
    return this.http.put<Hotel>(`${this.url}/put/${id}`, objeto);
  }

  eliminarHotel(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/delete/${id}`).pipe(
      tap(() => {
        // Realizar otras acciones después de una eliminación exitosa
        console.log('Hotel eliminado con éxito.');
        // Recargar la página
      }),catchError((error: any) => {
        console.error('Error al eliminar el hotel:', error);
        throw error;
      })
    );
  }
}
