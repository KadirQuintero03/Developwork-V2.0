import { Component, EventEmitter, Output} from '@angular/core';
import { persona } from '../../../../interface/persona';
import { PersonaService } from '../../../../services/persona.service';
import { equipo } from '../../../../interface/equipo';
import { TeamservService } from '../../../../services/teamserv.service';
import { rol } from '../../../../interface/rol';
import { RolserviceService } from '../../../../services/rolservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})

export class registerComponent {
  persona: persona = new persona();
  verequipo: equipo[] = [];
  verroles: rol[] = [];
  serviceLocalStorage: any;

  @Output() eventState = new EventEmitter<boolean>();

  changeState(){
    this.eventState.emit(false);
  }

  constructor(
    private serviceteam: TeamservService,
    private rolService: RolserviceService,
    private personaSerive: PersonaService,
  ) {}

  ngOnInit(): void {
    this.serviceteam.getData().subscribe((Response: any) => {
      this.verequipo = Response.data;
    });

    this.rolService.getData().subscribe((Response: any) => {
      this.verroles = Response.data.estados;
    });
  }

  //Valida que el campo no este vacio
  validateField(value: string): boolean {
    return value.trim() !== '';
  }

  //Valida que la longitud del nombre sea menor o igual 15
  validateLenght(value: string): boolean {
    return value.length <= 15;
  }

  //Valida el formato del correo que se ingresa
  validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  //genera una contraseña aleatoria
  randomPassword(longitud: number): string {
    //Constante que almacena los caracteres que contrendra la contraseña
    const caracteres: string =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+';

    //Obtenemos la longitud de los caracteres proporcionados
    const caractereslength = caracteres.length;

    //Declaro una variable constraseña
    let password: string = '';

    //Se crea un array que será del tamaño de la longitud de la contraseña
    const array = new Uint32Array(longitud);

    //Se usa el objeto crypto del navegador para generar valores aleatorios y cargar el 'array' con ellos
    window.crypto.getRandomValues(array);

    /*Iteramos sobre cada elemento del 'array' concatenando los valores almacenados en el 'array'.
    array[i] % caracteresLength devuelve un índice aleatorio dentro del rango de caracteres permitido,
    utilizando el operador módulo %.*/
    for (let i = 0; i < longitud; i++) {
      password += caracteres[array[i] % caractereslength];
    }

    //Retornamos la contraseña
    return password;
  }

  async addPersona() {
    const { nombre1, nombre2, apellido1, apellido2, correo } = this.persona;

    if (!(this.validateField(nombre1) && this.validateField(apellido1))) {
      alert('Ingrese minimo un nombre y un apellido');
      return;
    }

    if (
      !(
        this.validateLenght(nombre1) &&
        this.validateLenght(nombre2) &&
        this.validateLenght(apellido1) &&
        this.validateLenght(apellido2)
      )
    ) {
      alert('Los nombres y apellidos no pueden ser mayores a 10 caracteres');
      return;
    }

    if (correo !== undefined && !this.validateEmail(correo)) {
      alert('Formato de correo incorrecto');
      return;
    }

    this.persona.contrasena = this.randomPassword(8);
    this.persona.idEstado.id_estado = '1';

    this.personaSerive.postData(this.persona).subscribe(
      (response) => { console.log('Usuario agregado con éxito:', response);
        alert(`El usuario ${nombre1} ${apellido1} fue registrado con éxito.`);
      },
      (error) => {
        console.error('Error en la solicitud:', error);
      }
    );
  }
}
