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
  private URL: string = 'https://zc4fjp74-3000.brs.devtunnels.ms/';
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
    return this.http.delete(`${this.URL}`, { headers, body: __notificacion });
  }
}
