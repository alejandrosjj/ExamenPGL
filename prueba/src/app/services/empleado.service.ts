import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Empleado } from '../interfaces/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  private myUrl: string;
  private myapiUrl: string;

    constructor(private httpClient: HttpClient) { 
    this.myUrl = environment.endpoint;
    this.myapiUrl = 'api/empleados/'
  }


  getEmmpleados(): Observable<Empleado[]> {
    return this.httpClient.get<Empleado[]>(`${this.myUrl}${this.myapiUrl}`);
  }

  deleteEmpleado(id: number): Observable<void>{
    return this.httpClient.delete<void>(`${this.myUrl}${this.myapiUrl}${id}`)
  }

  saveEmpleado(empleado: Empleado): Observable<void> {
    return this.httpClient.post<void>(`${this.myUrl}${this.myapiUrl}`, empleado)
  }

  getEmpleado(id: number): Observable<Empleado> {
    return this.httpClient.get<Empleado>(`${this.myUrl}${this.myapiUrl}${id}`)
  }

  updateEmpleado(id: number, empleado: Empleado): Observable<void> {
    return this.httpClient.put<void>(`${this.myUrl}${this.myapiUrl}${id}`, empleado)
  }

}
