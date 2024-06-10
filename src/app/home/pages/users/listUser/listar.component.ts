import { Component, OnInit } from '@angular/core';
import { persona } from '../../../../interface/persona';
import { PersonaService } from '../../../../services/persona.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css'],
})

export class ListarComponent implements OnInit {
  personaSelect: persona = new persona();
  user: persona = new persona();
  verusuario: persona[] = [];
  visibilityRU: boolean = false;
  visibilityMU: boolean = false;

  constructor(private servicepersona: PersonaService) {
    // this.user = this.servicepersona.getUser();

    // if (this.personaSelect.id_usuario == '') {
    //   this.servicepersona.getData().subscribe((Response: any) => {
    //     this.verusuario = Response.data;
    //   });
    // }
  }

  ngOnInit(): void {
    this.servicepersona.getData().subscribe((Response: any) => {
      this.verusuario = Response.users;
    });
  }

  newUser(newValue: boolean){
    this.visibilityRU = newValue
  }

  modUser(newValue: boolean) {
    this.servicepersona.setPersona(this.personaSelect);
    this.visibilityMU = newValue
  }
}
