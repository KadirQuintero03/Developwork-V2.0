import { Component } from '@angular/core';
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

  constructor(private personaService: PersonaService) {}

  ngOnInit(){
    this.personaService.setPersonaLog().subscribe((Response: any)=>{
      this.personalog=Response.users;
      console.log('UsarioLoggeado:', this.personalog)
    });
  }
}
