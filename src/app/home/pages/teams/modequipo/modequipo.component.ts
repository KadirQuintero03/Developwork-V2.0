import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { equipo } from '../../../../interface/equipo';
import { TeamservService } from '../../../../services/teamserv.service';
import { estado } from '../../../../interface/estado';
import { EstadoserviceService } from '../../../../services/estadoservice.service';

@Component({
  selector: 'app-modequipo',
  templateUrl: './modequipo.component.html',
})

export class ModequipoComponent {
  equipo: equipo = new equipo();
  verestado: estado[] = [];
  verequipo: equipo[] = [];

  @Output() changeStateMT = new EventEmitter<boolean>;

  constructor(
    private router: Router,
    private serviceequipo: TeamservService,
    private serviceestado: EstadoserviceService,
  ) {}

  mod() {
    this.serviceequipo.modEquipo(this.equipo).subscribe((Response) => {
      console.log('Equipo modificado con exito.', Response);
      alert('El equipo fue modificado con exito, recargue la ventana.')
    });

    this.serviceequipo.setEquipo(new equipo());
  }

  closeMT(){
    this.changeStateMT.emit(false)
  }

  ngOnInit(): void {
    if (this.serviceequipo.getEquipo().id_equipo == '') {
      this.router.navigate(['/user/teams']);
    } else {
      this.equipo = this.serviceequipo.getEquipo();
      this.serviceestado.getData().subscribe((Response: any) => {
        this.verestado = Response.data.roles;
      });
    }
  }
}
