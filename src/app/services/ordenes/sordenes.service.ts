import { Injectable } from '@angular/core';
import { ordenes_matenimiento } from '../../interface/ordenes_mantenimiento';
import { persona } from '../../interface/persona';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LocalStorageService } from '../loalStorage/local-storage.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SordenesService {
  private forden: ordenes_matenimiento = new ordenes_matenimiento();
  private URL: string = 'https://2fc68cmh-3002.use2.devtunnels.ms/ordenes/realize';
  private token: string = '';
  private headers = new HttpHeaders();

  private _ordenes: ordenes_matenimiento[] = [];
  constructor(
    private http: HttpClient,
    private serviceLocalStorage: LocalStorageService
  ) {
    this.token = this.serviceLocalStorage.getItem('jwt');
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.token,
    });
  }
  getOrden() {
    return this.forden;
  }

  setOrden(_orden: ordenes_matenimiento) {
    this.forden = _orden;
  }
  ordenes(user:persona): Observable<any> {
    return this.http.post(this.URL+"/data", user,{ headers: this.headers });
  }
  ordenesP(user:persona): Observable<any> {
    return this.http.post(this.URL+"/pendientes",user ,{ headers: this.headers });
  }
  createOrden(orden: ordenes_matenimiento): Observable<any> {
    return this.http.post(this.URL, orden, { headers: this.headers });
  }
  putOrden(orden: ordenes_matenimiento): Observable<any> {
    return this.http.put(this.URL, orden, { headers: this.headers });
  }
}
