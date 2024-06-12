import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { equipo } from '../../../../interface/equipo';
import { TeamservService } from '../../../../services/teamserv.service';
import { RolserviceService } from '../../../../services/rolservice.service';
import { estado } from '../../../../interface/estado';
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

  @Output() changeStateMU = new EventEmitter<boolean>();

  constructor(
    private servicePersona: PersonaService,
    private router: Router,
    private serviceteam: TeamservService,
    private rolService: RolserviceService
  ) { }

  closeMU(){
    this.changeStateMU.emit(false);
  }

  ngOnInit(): void {
    if (this.servicePersona.getPersona().id_usuario == '') {
      this.router.navigate(['/user/personas']);
    } else {
      this.persona = this.servicePersona.getPersona();

      this.serviceteam.getData().subscribe((Response: any) => {
        this.verequipo = Response.data;
      });

      this.rolService.getData().subscribe((Response: any) => {
        this.verestado = Response.data.roles;
      });
    }
  }

  mod() {
    console.log(this.persona)
    this.servicePersona.modPersona(this.persona).subscribe((Response) => {
      console.log('Usuario modificado con éxito:', Response);
      alert(`El usuario fue modificado con éxito, recargue la ventana.`);
    });
    this.servicePersona.setPersona(new persona());
  }
}
