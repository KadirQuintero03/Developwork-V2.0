import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { equipo } from '../../../../interface/equipo';
import { TeamservService } from '../../../../services/teamserv.service';
import { estado } from '../../../../interface/estado';
import { EstadoserviceService } from '../../../../services/estadoservice.service';
import { rol } from '../../../../interface/rol';
import { RolserviceService } from '../../../../services/rolservice.service';

@Component({
  selector: 'app-modequipo',
  templateUrl: './modequipo.component.html',
  styleUrls: ['./modequipo.component.css'],
})

export class ModequipoComponent {
  equipo: equipo = new equipo();
  verestado: estado[] = [];
  verroles: rol[] = [];
  verequipo: equipo[] = [];

  @Output() changeStateMT = new EventEmitter<boolean>;

  constructor(
    private router: Router,
    private serviceequipo: TeamservService,
    private serviceestado: EstadoserviceService,
    private rolService: RolserviceService
  ) {}

  mod() {
    this.serviceequipo.modEquipo(this.equipo).subscribe();

    this.serviceequipo.setEquipo(new equipo());

    this.router.navigate(['user/teams']);
  }

  closeMT(){
    this.changeStateMT.emit(false)
  }

  ngOnInit(): void {
    if (this.serviceequipo.getEquipo().id_equipo == '') {
      this.router.navigate(['/user/teams']);
    } else {
      this.equipo = this.serviceequipo.getEquipo();
      this.serviceestado.getData().subscribe((Response: estado[]) => {
        this.verestado = Response;
      });
      this.rolService.getData().subscribe((Response: rol[]) => {
        this.verroles = Response;
      });
    }
  }
}
