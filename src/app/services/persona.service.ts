import { Injectable } from '@angular/core';
import { persona } from '../interface/persona';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { LocalStorageService } from './local-storage.service';
import { environment } from '../interface/enviroment';

@Injectable({
  providedIn: 'root',
})
export class PersonaService {
  private static lstPersonas: persona[] = [];
  private static personaLog: persona = new persona();
  private personaMod: persona = new persona();
  private token: string = '';

  private Login = environment.Login;
  private CreateUser = environment.CreateUser;
  private GetUsers = environment.GetUsers;
  private UpdateTeams = environment.UpdateTeams;

  //Valida el TOKEN
  validToken(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.token,
    });
    return this.http.get(this.Login + 'checkSafe', {
      headers,
      responseType: 'text',
    });
  }

  getPersonas(): persona[] {
    this.getData().subscribe(
      (response) => {
        PersonaService.lstPersonas = response;
        return PersonaService.lstPersonas;
      },
      (error) => {
        console.error('Error en la solicitud:', error);
      }
    );
    return PersonaService.lstPersonas;
  }

  setPersona(_persona: persona) {
    return (this.personaMod = _persona);
  }

  getPersona(): persona {
    return this.personaMod;
  }

  constructor(
    private http: HttpClient,
    private serviceLocalStorage: LocalStorageService
  ) {
    this.token = serviceLocalStorage.getItem('jwt');
  }

  //Loggearse en la aplicacion
  login(user: persona): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.token,
    });

    console.log('correo: ', user.correo)
    console.log('contra: ', user.contra)
    return this.http.get(`${this.GetUsers}`, { headers }).pipe(
      catchError((error) => {
        console.error('Error en la solicitud:', error);
        throw error;
      })
    );
  }

  //Trae la informacion del usuario loggeado
  setPersonaLog(): Observable<any> {
    this.token = this.serviceLocalStorage.getItem('jwt');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.token,
    });
    return this.http.get(this.Login + 'usuario', { headers });
  }

  //Traer a todos los usuarios
  getData(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.token,
    });
    return this.http.get(`${this.GetUsers}`, { headers });
  }

  //Crear usuario
  postData(data: persona): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.token,
    });
    return this.http.post(this.CreateUser, data, { headers });
  }

  //Modificar usuario
  modPersona(persona: persona): Observable<any> {
    this.token = this.serviceLocalStorage.getItem('jwt');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.token,
    });
    return this.http.put(this.UpdateTeams, persona, { headers });
  }

  //Cambiar contraseña del usuario
  chPass(user: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.token,
    });
    return this.http.put(this.Login + 'chpass', user, {
      headers,
      responseType: 'text',
    });
  }
}
