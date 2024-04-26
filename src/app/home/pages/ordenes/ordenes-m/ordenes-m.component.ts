import { Component, OnInit } from '@angular/core';
import { SordenesService } from '@/app/services/ordenes/sordenes.service';
import { ordenes_matenimiento } from '@/app/Interface/ordenes_mantenimiento';
import { persona } from '@/app/interface/persona';
import { PersonaService } from '@/app/services/personas/persona.service';

@Component({
  selector: 'app-ordenes-m',
  templateUrl: './ordenes-m.component.html',
  styleUrls: ['./ordenes-m.component.css'],
})
export class OrdenesMComponent implements OnInit {
  ngOnInit(): void {
    this.refresh();
  }
  modorden: ordenes_matenimiento = new ordenes_matenimiento();
  userLog: persona = new persona();
  constructor(
    private sordenes: SordenesService,
    private spersona: PersonaService
  ) {
    this.modorden = this.sordenes.getOrden();
  }
  ordenesP: ordenes_matenimiento[] = [];
  ordenesR: ordenes_matenimiento[] = [];

  modOrden(ordenM: ordenes_matenimiento) {
    this.refresh();
    this.modorden = ordenM;
  }

  newOrden() {
    var fechaHoraActual = new Date();
    var año = fechaHoraActual.getFullYear();
    var mes = fechaHoraActual.getMonth() + 1; // Los meses comienzan desde cero, por lo que se suma 1
    var dia = fechaHoraActual.getDate();
    var horas = fechaHoraActual.getHours();
    var minutos = fechaHoraActual.getMinutes();
    var segundos = fechaHoraActual.getSeconds();

    var fechaHoraFormateada =
      año +
      this.pad(mes) +
      this.pad(dia) +
      this.pad(horas) +
      this.pad(minutos) +
      this.pad(segundos);
    console.log(fechaHoraFormateada);
    this.modorden = new ordenes_matenimiento();
    this.modorden.idOrder = 'O' + fechaHoraFormateada;
  }
  pad(numero: number): string {
    return numero < 10 ? '0' + numero.toString() : numero.toString();
  }
  refresh() {
    // this.spersona.setPersonaLog().subscribe((Response) => {
    //   this.sordenes.ordenes(Response).subscribe((Response) => {
    //     this.ordenesP = Response;
    //   });
    //   this.sordenes.ordenesP(Response).subscribe((Response) => {
    //     this.ordenesR = Response;
    //   });
    // });
  }
}
