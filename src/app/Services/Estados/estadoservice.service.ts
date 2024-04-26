import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { estado } from '../../interface/estado';
import { LocalStorageService } from '../../services/loalStorage/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class EstadoserviceService {
  private Estados: estado[] =[];
  private token: string = '';

  getEstado(){
    return this.Estados;
  }

  private URL: string = 'https://2fc68cmh-3001.use2.devtunnels.ms/api/v1/user/getAtri';
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
    return this.http.get(`${this.URL}`, { headers });
  }
}
