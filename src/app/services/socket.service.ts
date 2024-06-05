import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorageService } from './local-storage.service';
import { persona } from '../interface/persona';
import { notificacion } from '../interface/notificacion';

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  constructor(
    private socket: Socket,
    private http: HttpClient,
    private serviceLocalStorage: LocalStorageService
  ) {
    this.token = this.serviceLocalStorage.getItem('jwt');
  }
  private URL: string = 'http://191.88.249.172:3002/Ordenes';
  private token: string = '';

  conectarConIdUsuario(persona: persona) {
    this.socket.ioSocket.io.opts.query = { usuario: JSON.stringify(persona) };
    this.socket.connect();
    return this.socket.fromEvent('notificaciones');
  }

  escucharNuevaNotificacion() {
    return this.socket.fromEvent('nuevaNotificacion');
  }

  enviarNuevaNotificacion(mensaje: notificacion) {
    this.socket.emit('nuevaNotificacion', mensaje);
  }

  eliminar(__notificacion: notificacion): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.token,
    });
    console.log(__notificacion);
    return this.http.delete(`${this.URL}`, { headers, body: __notificacion });
  }
  
  disconet() {
    return this.socket.emit('disconect');
  }
}
