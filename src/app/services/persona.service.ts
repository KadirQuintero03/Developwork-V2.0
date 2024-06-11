import { Injectable } from '@angular/core';
import { persona } from '../interface/persona';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorageService } from './local-storage.service';
import { environment } from '../interface/enviroment';

@Injectable({
  providedIn: 'root',
})
export class PersonaService {
  private user: persona = new persona();
  private personaMod: persona = new persona();
  private token: string = '';

  private Login = environment.Login;
  private CreateUser = environment.CreateUser;
  private GetUsers = environment.GetUsers;
  private UpdateUser = environment.UpdateUser;

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
      Authorization: 'Bearer ',
    });
    return this.http.get(this.Login, { headers });
  }

  //Trae la informacion del usuario loggeado
  setPersonaLog(): Observable<any> {
    this.token = this.serviceLocalStorage.getItem('jwt');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.token,
    });
    return this.http.get(this.Login, { headers });
  }

  //Crear usuario
  postData(data: persona): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.token,
    });
    return this.http.post(this.CreateUser, data, { headers });
  }

  //Traer a todos los usuarios
  getData(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.token,
    });
    return this.http.get(`${this.GetUsers}`, { headers });
  }

  //Modificar usuario
  modPersona(persona: persona): Observable<any> {
    this.token = this.serviceLocalStorage.getItem('jwt');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.token,
    });
    return this.http.put(this.UpdateUser, persona, { headers });
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

  //Valida el TOKEN
  validToken(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.token,
    });
    return this.http.get(this.token, {
      headers,
      responseType: 'text',
    });
  }

  getUser() {
    return this.user;
  }

  setUser(_user: persona) {
    this.user = _user;
  }

  getPersona(): persona {
    return this.personaMod;
  }

  setPersona(_persona: persona) {
    return (this.personaMod = _persona);
  }
}
