import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PersonaService } from '../../../../services/persona.service';
import { persona } from '../../../../interface/persona';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css'],
})

export class InformationComponent {
  personalog: persona = new persona();
  visibility: boolean = false;

  changeVisibility(newValue: boolean){
    this.visibility = newValue
    console.log(this.visibility)
  }

  constructor(private router: Router, private personaService: PersonaService) {
    this.personaService.setPersonaLog().subscribe((Response :persona)=>{
      this.personalog=Response;
    });
  }
  CambContra(): void {
    this.router.navigate(['user/cambcontraseña']);
  }
}
