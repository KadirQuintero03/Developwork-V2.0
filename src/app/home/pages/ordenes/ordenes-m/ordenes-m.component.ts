import { Component, OnInit } from '@angular/core';
import { SordenesService } from '../../../../services/sordenes.service';
import { ordenes_matenimiento } from '../../../../interface/ordenes_mantenimiento';
import { persona } from '../../../../interface/persona';
import { PersonaService } from '../../../../services/persona.service';

@Component({
  selector: 'app-ordenes-m',
  templateUrl: './ordenes-m.component.html',
  styleUrls: ['./ordenes-m.component.css'],
})
export class OrdenesMComponent implements OnInit {
  modorden: ordenes_matenimiento = new ordenes_matenimiento();
  userLog: persona = new persona();
  ordenesP: ordenes_matenimiento[] = [];
  ordenesR: ordenes_matenimiento[] = [];

  constructor(
    private sordenes: SordenesService,
    private spersona: PersonaService
  ) {
    this.modorden = this.sordenes.getOrden();
  }

  ngOnInit(): void {
    this.refresh();
  }

  modOrden(ordenM: ordenes_matenimiento) {
    this.refresh();
    this.modorden = ordenM;
  }

  newOrden() {
    this.modorden.idOrder = 'O';
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
