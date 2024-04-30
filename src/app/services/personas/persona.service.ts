import { Injectable } from '@angular/core';
import { persona } from '../../interface/persona';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { LocalStorageService } from '../loalStorage/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class PersonaService {
  private static lstPersonas: persona[] = [];
  private personaMod: persona = new persona();
  private static personaLog: persona = new persona();
  private token: string = '';

  private URL: string =
    'https://2fc68cmh-3002.use2.devtunnels.ms/api/v1/user/login';

  private URL2: string =
    'https://2fc68cmh-3002.use2.devtunnels.ms/api/v1/user/createUser';

  private URL3: string =
    'https://2fc68cmh-3002.use2.devtunnels.ms/api/v1/user/getUsers';

  private URLMod: string =
    'https://2fc68cmh-3002.use2.devtunnels.ms/api/v1/user/updateTeams';

  validToken(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.token,
    });
    return this.http.get(this.URL + 'checkSafe', {
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

  //se usa en modPersonaComponent
  setPersona(_persona: persona) {
    return (this.personaMod = _persona);
  }

  //Se usa en modPersonaComponent
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

    return this.http.post(this.URL, { headers }).pipe(
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
    return this.http.get(this.URL + 'usuario', { headers });
  }

  getData(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.token,
    });
    return this.http.get(`${this.URL3}`, { headers });
  }

  postData(data: persona): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.token,
    });
    return this.http.post(this.URL2, data, { headers });
  }

  //Modificar usuario
  modPersona(persona: persona): Observable<any> {
    this.token = this.serviceLocalStorage.getItem('jwt');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.token,
    });
    return this.http.put(this.URLMod, persona, { headers });
  }

  //Cambiar contraseña del usuario
  chPass(user: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.token,
    });
    return this.http.put(this.URL + 'chpass', user, {
      headers,
      responseType: 'text',
    });
  }
}
