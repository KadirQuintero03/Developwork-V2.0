import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { equipo } from '../../../../interface/equipo';
import { TeamservService } from '../../../../services/teamserv.service';
import { rol } from '../../../../interface/rol';
import { RolserviceService } from '../../../../services/rolservice.service';
import { estado } from '../../../../interface/estado';
import { EstadoserviceService } from '../../../../services/estadoservice.service';
import { persona } from '../../../../interface/persona';
import { PersonaService } from '../../../../services/persona.service';

@Component({
  selector: 'app-modpersona',
  templateUrl: './modpersona.component.html',
})

export class ModpersonaComponent {
  public persona: persona = new persona();
  verequipo: equipo[] = [];
  verestado: estado[] = [];
  verroles: rol[] = [];

  constructor(
    private servicePersona: PersonaService,
    private router: Router,
    private serviceteam: TeamservService,
    private serviceestado: EstadoserviceService,
    private rolService: RolserviceService
  ) { }

  ngOnInit(): void {
    if (this.servicePersona.getPersona().idUsuario == '') {
      this.router.navigate(['/user/personas']);
    } else {
      this.persona = this.servicePersona.getPersona();

      this.serviceteam.getData().subscribe((Response: any) => {
        this.verequipo = Response.data;
      });

      // this.serviceestado.getData().subscribe((Response: any) => {
      //   this.verestado = Response.data.roles;
      //   console.log('roles: ', this.verroles)
      // });

      this.rolService.getData().subscribe((Response: any) => {
        this.verroles = Response.data.roles;
      });
    }
  }

  modificar() {
    console.log('Id de la persona: ', this.persona.idUsuario)
    console.log('Id equipo: ', this.persona.idEquipo.id_equipo)
    this.servicePersona.modPersona(this.persona).subscribe();
    this.servicePersona.setPersona(new persona());
    this.router.navigate(['/user/personas']);
  }
}
