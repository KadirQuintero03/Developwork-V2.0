import { Component } from '@angular/core';
import { PersonaService } from '../Services/personas/persona.service';
import { persona } from '@/app/Interface/persona';

@Component({
  selector: 'app-camb-contra',
  templateUrl: './camb-contra.component.html',
  //styleUrls: ['./camb-contra.component.css'],
})

export class CambContraComponent {
  contrasena: String = '';
  newCon: String = '';
  ChangeType: boolean = true;
  _user: persona = new persona();
  response: String = '';

  constructor(private servicePersona: PersonaService) {
    this.servicePersona.setPersonaLog().subscribe((response: persona) => {
      this._user = response;
    });
  }

  viewpass() {
    // Concatena el nombre del campo con la cadena 'ChangeType'

    // Accede a la propiedad correspondiente y la cambia
    this.ChangeType = !this.ChangeType;
  }

  chPassword() {
    const user: any = {
      correo: this._user.correo,
      contrasena: this.contrasena,
      id_usuario: this._user.id_user,
      nuevaCon: this.newCon,
    };
    this.servicePersona.chPass(user).subscribe(
      (response: any) => {
        this.response = response;
      },
      (error) => {
        console.log(error.status);
      }
    );
  }
}
