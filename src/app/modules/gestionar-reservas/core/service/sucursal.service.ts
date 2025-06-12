import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, tap } from 'rxjs';
import { Sucursal } from '../models/entidades';
import { API_CONFIG } from '../../../../config/api.config';


@Injectable({
  providedIn: 'root'
})
export class SucursalService {
  private url:string = `${API_CONFIG.baseUrl}/sucursal`

  constructor(private http:HttpClient) {
  }

  public getSucursales(): Observable<Sucursal[]> {
    return this.http.get<Sucursal[]>(`${this.url}/readAll`).pipe(
      catchError((error: any) => {
        console.error('Error al obtener las sucursales:', error);
        throw error; // Puedes lanzar el error nuevamente o manejarlo según tus necesidades.
      })
    );
  }

  getSucursal(id: number): Observable<Sucursal> {
    return this.http.get<Sucursal>(`${this.url}/get/${id}`);
  }

  agregarSucursal(objeto: Sucursal): Observable<Sucursal> {
    return this.http.post<Sucursal>(`${this.url}/save`, objeto);
  }

  actualizarSucursal(id: number, objeto: Sucursal): Observable<Sucursal> {
    return this.http.put<Sucursal>(`${this.url}/put/${id}`, objeto);
  }

  eliminarSucursal(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/delete/${id}`).pipe(
      tap(() => {
        // Realizar otras acciones después de una eliminación exitosa
        console.log('Sucursal eliminado con éxito.');
        // Recargar la página
      }),catchError((error: any) => {
        console.error('Error al eliminar la sucursal:', error);
        throw error;
      })
    );
  }
}
