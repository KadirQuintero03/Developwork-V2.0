import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { equipo } from '../interface/equipo';
import { LocalStorageService } from './local-storage.service';
import { environment } from '../interface/enviroment';

@Injectable({
  providedIn: 'root',
})
export class TeamservService {
  private equipoMod: equipo = new equipo();
  private token: string = '';
  private CreateTeams = environment.CreateTeams;
  private Updateteams = environment.UpdateTeams
  private GetTeams = environment.GetTeams;

  constructor(
    private http: HttpClient,
    private serviceLocalStorage: LocalStorageService
  ) {
    this.token = this.serviceLocalStorage.getItem('jwt');
  }

  //Agrega el equipo
  addEquipo(equipo: equipo): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.token,
    });
    return this.http.post(`${this.CreateTeams}`, equipo, { headers });
  }

  //Modifica el equipo
  modEquipo(equipo: equipo): Observable<any> {
    this.token = this.serviceLocalStorage.getItem('jwt');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.token,
    });
    console.log(headers);
    return this.http.put(this.Updateteams, equipo, {
      headers,
      responseType: 'text',
    });
  }

  //Trae a los equipos
  getData(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.token,
    });
    return this.http.get(`${this.GetTeams}`, { headers });
  }

  getEquipo(): equipo {
    return this.equipoMod;
  }

  setEquipo(_equipo: equipo) {
    return (this.equipoMod = _equipo);
  }
}
