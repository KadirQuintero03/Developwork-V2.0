import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { persona } from '../../../../interface/persona';
import { PersonaService } from '../../../../services/persona.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
})

export class ListarComponent implements OnInit {
  personaSelect: persona = new persona();
  user: persona = new persona();
  lstpersonas: persona[] = [];
  visibility: boolean = false;

  constructor(private servicepersona: PersonaService, private router: Router) {
    this.user = this.servicepersona.getUser();

    this.servicepersona.getData().subscribe((Response: any) => {
      this.lstpersonas = Response.data;
    });

    if (this.personaSelect.id_user == '') {
      this.servicepersona.getData().subscribe((Response: any) => {
        this.lstpersonas = Response.data;
      });
    }
  }

  ngOnInit(): void {
    this.servicepersona.getData().subscribe((Response: any) => {
      this.lstpersonas = Response.data;
    });
  }

  addUser() {
    this.router.navigate(['user/register']);
  }

  modPersona() {
    this.servicepersona.setPersona(this.personaSelect);
    this.router.navigate(['user/modPersona']);
  }

  changeVisibility(){
    this.visibility = !this.visibility
    console.log(this.visibility)
  }
}
