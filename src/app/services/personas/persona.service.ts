import { Injectable } from '@angular/core';
import { persona } from '../../interface/persona';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { LocalStorageService } from '../loalStorage/local-storage.service';
import { environment } from '../../interface/enviroment';

@Injectable({
  providedIn: 'root',
})
export class PersonaService {
  private static lstPersonas: persona[] = [];
  private personaMod: persona = new persona();
  private static personaLog: persona = new persona();
  private token: string = '';

  private apiUrlLogin = environment.apiUrlLogin;
  private apiUrlCreateUser = environment.apiUrlCreateUser;
  private apiUrlGetUsers = environment.apiUrlGetUsers;
  private apiUrlUpdateTeams = environment.apiUrlUpdateTeams;

  //Valida el TOKEN
  validToken(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.token,
    });
    return this.http.get(this.apiUrlLogin + 'checkSafe', {
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

  //.....................................................................

  //Loggearse en la aplicacion
  login(user: persona): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.token,
    });

    console.log('correo: ', user.correo)
    console.log('contra: ', user.contra)
    return this.http.get(`${this.apiUrlGetUsers}`, { headers }).pipe(
      catchError((error) => {
        console.error('Error en la solicitud:', error);
        throw error;
      })
    );
  }

  // Función para establecer el token
  setToken(token: string) {
    this.token = token;
  }

  // Función para obtener el token
  getToken(): string | null {
    return this.token;
  }

  // Función para agregar el token a las solicitudes
  addTokenToHeaders(headers: HttpHeaders): HttpHeaders {
    if (this.token) {
      return headers.set('Authorization', 'Bearer ' + this.token);
    }
    return headers;
  }

  //.....................................................................

  //Trae la informacion del usuario loggeado
  setPersonaLog(): Observable<any> {
    this.token = this.serviceLocalStorage.getItem('jwt');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.token,
    });
    return this.http.get(this.apiUrlLogin + 'usuario', { headers });
  }

  //Traer a todos los usuarios
  getData(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.token,
    });
    return this.http.get(`${this.apiUrlGetUsers}`, { headers });
  }

  //Crear usuario
  postData(data: persona): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.token,
    });
    return this.http.post(this.apiUrlCreateUser, data, { headers });
  }

  //Modificar usuario
  modPersona(persona: persona): Observable<any> {
    this.token = this.serviceLocalStorage.getItem('jwt');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.token,
    });
    return this.http.put(this.apiUrlUpdateTeams, persona, { headers });
  }

  //Cambiar contraseña del usuario
  chPass(user: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.token,
    });
    return this.http.put(this.apiUrlLogin + 'chpass', user, {
      headers,
      responseType: 'text',
    });
  }
}
