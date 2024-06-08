import { Component, EventEmitter, Output } from '@angular/core';
import { PersonaService } from '../../../services/persona.service';
import { persona } from '../../../interface/persona';

@Component({
  selector: 'app-camb-contra',
  templateUrl: './camb-contra.component.html',
})
export class CambContraComponent {
  contrasena: string = '';
  newCon: string = '';
  ChangeType: boolean = true;
  _user: persona = new persona();
  response: string = '';

  @Output() eventState = new EventEmitter<boolean>();

  changeState() {
    this.eventState.emit(false);
  }

  constructor(private servicePersona: PersonaService) {
    this.servicePersona.setPersonaLog().subscribe((response: persona) => {
      this._user = response;
    });
  }

  viewpass() {
    this.ChangeType = !this.ChangeType;
  }

  chPassword() {
    const user: any = {
      correo: this._user.correo,
      contrasena: this.contrasena,
      id_usuario: this._user.id_usuario,
      nuevaCon: this.newCon,
    };
    this.servicePersona.chPass(user).subscribe(
      (response: any) => {
        this.response = response;
        console.log('Contraseña modificada con exito:', this.response);
        alert(`Contraseña modificada con éxito.`);
      },
      (error) => {
        console.error('Error en la solicitud:', error);
      }
    );
  }
}
