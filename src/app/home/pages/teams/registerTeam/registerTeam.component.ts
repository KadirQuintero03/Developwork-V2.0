import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { estado } from '@/app/interface/estado';
import { EstadoserviceService } from '@/app/services/estadoservice.service';
import { equipo } from '@/app/interface/equipo';
import { TeamservService } from '@/app/services/teamserv.service';

@Component({
  selector: 'app-register-team',
  templateUrl: './registerTeam.component.html',
  styles: [``],
})
export class RegisterTeamComponent {
  verestado: estado[] = [];
  verequipo: equipo[] = [];
  nuevoEquipo: equipo = new equipo();

  @Output() changeStateRT = new EventEmitter<boolean>;

  changeVisibilityRT(){
    this.changeStateRT.emit(false)
  }

  constructor(private serviceestado: EstadoserviceService, private serviceteam: TeamservService,) {}

  ngOnInit(): void {
    // this.serviceteam.getData().subscribe((Response: equipo[]) => {
    //   this.verequipo = Response;
    // });
    this.serviceestado.getData().subscribe((Response: any) => {
      this.verestado = Response.data.estados;
    });
  }

  ValidarCamp(value: string): boolean {
    return value.trim() !== '';
  }

  async AgregarEquipo() {
    // Modificar que se genere el ID de manera random
    // this.nuevoEquipo.id_equipo = '23524'

    this.serviceteam.addEquipo(this.nuevoEquipo).subscribe(
      (response) => { console.log('Equipo agregado con éxito:', response);
        alert("Nuevo equipo agregado con exito")
        this.verequipo.push(this.nuevoEquipo);
      },
      (error) => {console.error('Error al agregar equipo:', error);
      }
    );
  }
}
