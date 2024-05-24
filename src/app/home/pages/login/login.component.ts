import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { persona } from '../../../interface/persona';
import { PersonaService } from '../../../services/persona.service';
import { LocalStorageService } from '../../../services/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  public usuario: persona = new persona();
  ChangeType: boolean = true;

  constructor(
    private router: Router,
    private serviceLocalStorage: LocalStorageService,
    private PersonaService: PersonaService
  ) {}

  viewpass() {
    this.ChangeType = !this.ChangeType;
  }

  validarEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  ValidarCamp(value: string): boolean {
    return value.trim() !== '';
  }

  IniciarSesion(): void {
    const { correo, contra } = this.usuario;

    if (
      (correo !== undefined && !this.ValidarCamp(correo)) ||
      (contra !== undefined && !this.ValidarCamp(contra))
    ) {
      alert('Los campos correo y contraseña no pueden estar vacios');
      return;
    }

    if (correo !== undefined && !this.validarEmail(correo)) {
      alert('Formato de correo invalido');
      return;
    }

    this.PersonaService.login(this.usuario).subscribe(
      (response: string) => {
        if (response != undefined) {
          this.serviceLocalStorage.setItem('jwt', response);
          this.PersonaService.setPersonaLog();
          this.router.navigate(['/user']);
        }
      },
      (error) => {
        console.error('Error durante el inicio de sesión:', error);
      }
    );
  }
}
