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

  changeVisibilityRT() {
    this.changeStateRT.emit(false);
  }

  constructor(
    private serviceteam: TeamservService
  ) {}

  ValidarCamp(value: string): boolean {
    return value.trim() !== '';
  }

  async AgregarEquipo() {
    // Modificar que se genere el ID de manera random
    this.nuevoEquipo.idEquipo = '25550';
    this.nuevoEquipo.idEstado.id_estado = '1';

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
