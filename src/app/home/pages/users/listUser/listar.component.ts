import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { persona } from '../../../../interface/persona';
import { PersonaService } from '../../../../services/persona.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
})
export class ListarComponent implements OnInit{
  personaSelect: persona = new persona();
  lstpersonas: persona[] = [];

  constructor(private servicepersona: PersonaService,
    private router: Router){
      this.servicepersona.getData().subscribe((Response: any) => {
      this.lstpersonas = Response.data;
      // console.log(this.lstpersonas)
    });

    if (this.personaSelect.id_user == '') {
      this.servicepersona.getData().subscribe((Response: any) => {
        this.lstpersonas = Response.data;
      });
    }}

    ngOnInit(): void {
      this.servicepersona.getData().subscribe((Response: any) => {
        this.lstpersonas = Response.data;
        // console.log(this.lstpersonas)
      });
    }

  modPersona() {
    console.log("Persona seleccionada: ", this.personaSelect);
    this.servicepersona.setPersona(this.personaSelect);
    this.router.navigate(['user/modPersona']);
  }

  addUser(){
    this.router.navigate(['user/register']);
  }
}
