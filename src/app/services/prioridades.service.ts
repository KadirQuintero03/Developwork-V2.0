import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LocalStorageService } from './loalStorage/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class PrioridadesService {

  private token: string = '';

  private URL: string = 'https://2fc68cmh-3001.use2.devtunnels.ms/api/v1/ordenes/prio';
  constructor(
    private http: HttpClient,
    private serviceLocalStorage: LocalStorageService
  ) {
    this.token = this.serviceLocalStorage.getItem('jwt');
  }
  getData(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.token,
    });
    return this.http.get(`${this.URL}`, { headers });
  }

}
