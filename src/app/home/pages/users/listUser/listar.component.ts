import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  visibility: boolean = false;

  constructor(private servicepersona: PersonaService, private router: Router) {
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
      console.log(this.verusuario)
    });
  }

  modPersona() {
    this.servicepersona.setPersona(this.personaSelect);
    this.router.navigate(['user/modPersona']);
  }

  changeVisibility(newValue: boolean){
    this.visibility = newValue
    console.log(this.visibility)
  }
}
