import { Component, OnInit } from '@angular/core';
import { persona } from '@/app/interface/persona';
import { PersonaService } from '@/app/services/personas/persona.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css'],
})
export class ListarComponent implements OnInit{
  personaSelect: persona = new persona();
  lstpersonas: persona[] = [];

  constructor(private servicepersona: PersonaService,
    private router: Router){    this.servicepersona.getData().subscribe((Response: persona[]) => {
      this.lstpersonas = Response;
    });
    if (this.personaSelect.id_user == '') {
      this.servicepersona.getData().subscribe((Response: persona[]) => {
        this.lstpersonas = Response;
      });
    }}

    ngOnInit(): void {
      this.servicepersona.getData().subscribe((Response: persona[]) => {
        this.lstpersonas = Response;
      });
    }

  modPersona() {
    console.log(this.personaSelect);
    this.servicepersona.setPersona(this.personaSelect);
    this.router.navigate(['user/modPersona']);
  }
}
