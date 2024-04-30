import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { equipo } from '../../../../interface/equipo';
import { TeamservService } from '../../../../services/teams/teamserv.service';
import { rol } from '../../../../interface/rol';
import { RolserviceService } from '../../../../services/Roles/rolservice.service';
import { estado } from '../../../../interface/estado';
import { EstadoserviceService } from '../../../../services/Estados/estadoservice.service';
import { persona } from '../../../../interface/persona';
import { PersonaService } from '../../../../services/personas/persona.service';

@Component({
  selector: 'app-modpersona',
  templateUrl: './modpersona.component.html',
  styleUrls: ['./modpersona.component.css'],
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
    if (this.servicePersona.getPersona().id_user == '') {
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
    console.log('Id de la persona: ', this.persona.id_usuario)
    console.log('Id equipo: ', this.persona.id_equipo)
    this.servicePersona.modPersona(this.persona).subscribe();
    this.servicePersona.setPersona(new persona());
    this.router.navigate(['/user/personas']);
  }
}
