import { Component, EventEmitter, Output } from '@angular/core';
import { equipo } from '@/app/interface/equipo';
import { TeamservService } from '@/app/services/teamserv.service';

@Component({
  selector: 'app-register-team',
  templateUrl: './registerTeam.component.html',
  styles: [``],
})
export class RegisterTeamComponent {
  nuevoEquipo: equipo = new equipo();
  verequipo: equipo[] = [];

  @Output() changeStateRT = new EventEmitter<boolean>();

  closeRT() {
    this.changeStateRT.emit(false);
  }

  constructor(private serviceteam: TeamservService) {}

  validateCamp(value: string): boolean {
    return value.trim() !== '';
  }

  validateNumIntegrantes(value: number): boolean {
    return value > 1 && value <= 10
  }

  validateLenght(value: string): boolean {
    return value.length >= 7 && value.length <= 15;
  }

  validateOnlyLetters(value: string): boolean {
    const letters = /^[a-zA-Z]+$/
    return letters.test(value);
  }

  randomIdTeam(length: number): string {
    let newIdRandom = 0;

    newIdRandom = Math.floor(Math.random() * length);

    return newIdRandom.toString();
  }

  async addTeam() {
    const { nombre_equipo, NumIntegrantes } = this.nuevoEquipo;

    if (!this.validateCamp(nombre_equipo)) {
      alert('Por favor, ingrese un nombre para el equipo.');
      return;
    }

    if (!this.validateLenght(nombre_equipo)) {
      alert('El nombre del equipo debe ser mayor igual a 7 o menos igual 15');
      return;
    }

    if (!this.validateOnlyLetters(nombre_equipo)) {
      alert('El campo de nombre solo puede contener valores NO numericos');
      return;
    }

    if(!this.validateNumIntegrantes(Number(NumIntegrantes))){
      alert('Minimo de integrantes 2 y maximo de integrantes 10, solo valores numericos');
      return;
    }

    //Asigna un ID aleatorio al equipo que se registre
    this.nuevoEquipo.id_equipo = this.randomIdTeam(10000000);
    //Estado del equipo al registrar siempre será activo
    this.nuevoEquipo.estados.id_estado = '1';

    this.serviceteam.addEquipo(this.nuevoEquipo).subscribe(
      (response) => {
        console.log('Equipo agregado con éxito:', response);
        alert('Nuevo equipo agregado con exito');
        this.verequipo.push(this.nuevoEquipo);
      },
      (error) => {
        console.error('Error al agregar equipo:', error);
      }
    );
  }
}
