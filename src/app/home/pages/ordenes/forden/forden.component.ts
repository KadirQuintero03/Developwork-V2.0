import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TeamservService } from '../../../../services/teamserv.service';
import { EstadoserviceService } from '../../../../services/estadoservice.service';
import { SordenesService } from '../../../../services/sordenes.service';
import { equipo } from '../../../../interface/equipo';
import { estado } from '../../../../interface/estado';
import { ordenes_matenimiento } from '../../../../interface/ordenes_mantenimiento';
import { persona } from '../../../../interface/persona';
import { prioridad } from '../../../../interface/prioridad';
import { PersonaService } from '../../../../services/persona.service';
import { PrioridadesService } from '../../../../services/prioridades.service';

@Component({
  selector: 'app-forden',
  templateUrl: './forden.component.html',
})
export class FordenComponent {
  @Input() modorden: ordenes_matenimiento = new ordenes_matenimiento();
  @Output() mensajeCambiado = new EventEmitter<ordenes_matenimiento>();
  prioridades: prioridad[] = [];
  equipos: equipo[] = [];
  estados: estado[] = [
    {
      id_estado: '1',
      nombre_estado: 'no iniciado',
    },
    {
      id_estado: '2',
      nombre_estado: 'en curso',
    },
    {
      id_estado: '3',
      nombre_estado: 'revision',
    },
    {
      id_estado: '4',
      nombre_estado: 'finalizado',
    },
  ];

  nuevo: boolean = false;
  administrativo: persona = new persona();
  cerrar() {
    this.mensajeCambiado.emit(new ordenes_matenimiento());
  }

  constructor(
    private sequipos: TeamservService,
    private sestados: EstadoserviceService,
    private spersonas: PersonaService,
    private sordenes: SordenesService,
    private getPrioridades: PrioridadesService
  ) {}

  ngOnInit(): void {
    this.sequipos.getData().subscribe((Response: any) => {
      this.equipos = Response.data;
    });

    this.getPrioridades.getData().subscribe((Response: any) => {
      this.prioridades = Response.data;
    });

    //Carga en el select de los estados, los estados disponibles
    // this.sestados.getData().subscribe((Response) => {
    //   this.estados = Response;
    // });

    // this.spersonas.setPersonaLog().subscribe((Response) => {
    //   this.administrativo = Response;
    //   if (this.modorden.idUser == '') {
    //     this.modorden.idUser = this.administrativo.id_user;
    //     this.nuevo = true;
    //   }
    // });
  }

  agregar(): void {
    this.nuevo = !this.nuevo;
    // this.modorden.idEquipo =
    //   this.equipos.find((x) => x.id_equipo == this.modorden.equipo.id_equipo) ||
    //   new equipo();
    // this.modorden.estado =
    //   this.estados.find((x) => x.id_estado == this.modorden.estado.id_estado) ||
    //   new estado();
    // this.modorden.prioridad =
    //   this.prioridades.find(
    //     (x) => x.id_prioridad == this.modorden.prioridad.id_prioridad
    //   ) || new prioridad();
    this.sordenes.createOrden(this.modorden).subscribe(
      (response) => {
        console.log(response);
        alert('Nueva orden registrada con exito');
      },
      (error) => {
        console.log(error);
      }
    );
    this.cerrar();
  }

  // actualizar() {
  //   this.modorden.equipo =
  //     this.equipos.find((x) => x.id_equipo == this.modorden.equipo.id_equipo) ||
  //     new equipo();
  //   this.modorden.estado =
  //     this.estados.find((x) => x.id_estado == this.modorden.estado.id_estado) ||
  //     new estado();
  //   this.modorden.prioridad =
  //     this.prioridades.find(
  //       (x) => x.id_prioridad == this.modorden.prioridad.id_prioridad
  //     ) || new prioridad();
  //   this.sordenes.putOrden(this.modorden).subscribe((Response) => {});
  //   this.cerrar();
  // }
}
