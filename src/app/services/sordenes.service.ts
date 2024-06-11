import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ordenes_matenimiento } from '../interface/ordenes_mantenimiento';
import { persona } from '../interface/persona';
import { environment } from '@/app/interface/enviroment';
import { LocalStorageService } from './local-storage.service';


@Injectable({
  providedIn: 'root',
})
export class SordenesService {
  private forden: ordenes_matenimiento = new ordenes_matenimiento();
  private token: string = '';
  private headers = new HttpHeaders();
  private PetOrden = environment.PetOrden
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
    return this.http.post(this.PetOrden+"/data", user,{ headers: this.headers });
  }

  ordenesP(user:persona): Observable<any> {
    return this.http.post(this.PetOrden+"/pendientes",user ,{ headers: this.headers });
  }

  createOrden(orden: ordenes_matenimiento): Observable<any> {
    return this.http.post(this.PetOrden, orden, { headers: this.headers });
  }

  putOrden(orden: ordenes_matenimiento): Observable<any> {
    return this.http.put(this.PetOrden, orden, { headers: this.headers });
  }
}
