import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { equipo } from '@/app/interface/equipo';
import { rol } from '@/app/interface/rol';
import { estado } from '@/app/interface/estado';
import { persona } from '@/app/interface/persona';
import { TeamservService } from '@/app/services/teams/teamserv.service';
import { RolserviceService } from '@/app/services/Roles/rolservice.service';
import { EstadoserviceService } from '@/app/services/Estados/estadoservice.service';
import { PersonaService } from '@/app/services/personas/persona.service';

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

  modificar() {
    this.servicePersona.modPersona(this.persona).subscribe();
    this.servicePersona.setPersona(new persona());
    this.router.navigate(['/user/personas']);
  }
  ngOnInit(): void {
    if (this.servicePersona.getPersona().id_user == '') {
      this.router.navigate(['/user/personas']);
    } else {
      this.persona = this.servicePersona.getPersona();
      this.serviceteam.getData().subscribe((Response: equipo[]) => {
        this.verequipo = Response;
      });

      this.serviceestado.getData().subscribe((Response: estado[]) => {
        this.verestado = Response;
      });
      this.rolService.getData().subscribe((Response: rol[]) => {
        this.verroles = Response;
      });
    }
  }
}
