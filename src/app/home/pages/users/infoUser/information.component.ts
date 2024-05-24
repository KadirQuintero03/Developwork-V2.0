import { Component } from '@angular/core';
import { Router } from '@angular/router';
<<<<<<< HEAD:src/app/home/pages/infoUser/information.component.ts
import { PersonaService } from '../../../services/persona.service';
import { persona } from '../../../interface/persona';
=======
import { PersonaService } from '../../../../services/persona.service';
import { persona } from '../../../../interface/persona';
>>>>>>> b863b339312b06a740bd205383ffe203aa90c3b6:src/app/home/pages/users/infoUser/information.component.ts

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
})

export class InformationComponent {
  personalog: persona = new persona();
  constructor(private router: Router, private personaService: PersonaService) {
    this.personaService.setPersonaLog().subscribe((Response :persona)=>{
      this.personalog=Response;
    });
  }
  CambContra(): void {
    this.router.navigate(['user/cambcontraseña']);
  }
}
