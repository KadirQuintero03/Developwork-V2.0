import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { estado } from '../interface/estado';
import { LocalStorageService } from './local-storage.service';
import { environment } from '../interface/enviroment';

@Injectable({
  providedIn: 'root',
})
export class EstadoserviceService {
  private Estados: estado[] = [];
  private token: string = '';
  private GetRolEstado = environment.GetRolEstado

  getEstado() {
    return this.Estados;
  }

  constructor(
    private http: HttpClient,
    private serviceLocalStorage: LocalStorageService
  ) {
    this.token = serviceLocalStorage.getItem('jwt');
  }

  getData(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.token,
    });
    return this.http.get(`${this.GetRolEstado}`, { headers });
  }
}
