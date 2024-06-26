import { Component, EventEmitter, Output } from '@angular/core';
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

  @Output() changeStateRU = new EventEmitter<boolean>();

  closeRU() {
    this.changeStateRU.emit(false);
  }

  constructor(
    private serviceteam: TeamservService,
    private rolService: RolserviceService,
    private personaSerive: PersonaService
  ) {}

  ngOnInit(): void {
    this.serviceteam.getData().subscribe((Response: any) => {
      this.verequipo = Response.data;
    });

    this.rolService.getData().subscribe((Response: any) => {
      this.verroles = Response.data.estados;
    });
  }

  validateCamp(value: string): boolean {
    return value.trim() !== '';
  }

  validateLenghtId(value: string): boolean {
    return value.length >= 7 && value.length <= 11;
  }

  validateLenght(value: string): boolean {
    return value.length >= 3 && value.length <= 15;
  }

  validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  validateOnlyLetters(value: string): boolean {
    const lettersPermitted = /^[A-Za-z]+$/;
    return lettersPermitted.test(value);
  }

  validateOnlyNumbers(value: string): boolean {
    const lettersPermitted = /^[0-9]+$/;
    return lettersPermitted.test(value);
  }

  randomPassword(length: number): string {
    //Constante que almacena los caracteres que contrendra la contraseña
    const caracteres: string =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+';

    //Obtenemos la longitud de los caracteres proporcionados
    const caractereslength = caracteres.length;

    let password: string = '';

    //Se crea un array que será del tamaño de la longitud de la contraseña
    const array = new Uint32Array(length);

    //Se usa el objeto crypto del navegador para generar valores aleatorios y cargar el 'array' con ellos
    window.crypto.getRandomValues(array);

    /*Iteramos sobre cada elemento del 'array' concatenando los valores almacenados en el 'array'.
    array[i] % caracteresLength devuelve un índice aleatorio dentro del rango de caracteres permitido,
    utilizando el operador módulo %.*/
    for (let i = 0; i < length; i++) {
      password += caracteres[array[i] % caractereslength];
    }

    return password;
  }

  async addUser() {
    const { id_usuario, nombre1, nombre2, apellido1, apellido2, correo } =
      this.persona;

    if (!(this.validateCamp(nombre1) && this.validateCamp(apellido1))) {
      alert('Ingrese minimo un nombre y un apellido');
      return;
    }

    if (!this.validateLenghtId(id_usuario)) {
      alert(
        'La cedula debe contener digitos mayores igual 7 o menores igual 11'
      );
      return;
    }

    if (!this.validateOnlyNumbers(id_usuario)) {
      alert(
        'La cedula no puede contener caracteres no numericos'
      );
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
      alert('Los nombres y apellidos deben ser mayor igual 3 o menor igual 15');
      return;
    }

    if (
      !(
        this.validateOnlyLetters(nombre1) &&
        this.validateOnlyLetters(nombre2) &&
        this.validateOnlyLetters(apellido1) &&
        this.validateOnlyLetters(apellido2)
      )
    ) {
      alert(
        'No se permiten caracteres numericos en los campos de Nombre y Apellido'
      );
      return;
    }

    if (correo !== undefined && !this.validateEmail(correo)) {
      alert('Formato de correo incorrecto');
      return;
    }

    //Asignacion de contraseña aleatoria al registrar el usuario
    this.persona.contrasena = this.randomPassword(8);
    //Estado del usuario al registrar siempre será activo
    this.persona.idEstado.id_estado = '1';

    this.personaSerive.postData(this.persona).subscribe(
      (response) => {
        console.log('Usuario agregado con éxito:', response);
        alert(`El usuario ${nombre1} ${apellido1} fue registrado con éxito.`);
      },
      (error) => {
        console.error('Error en la solicitud:', error);
      }
    );
  }
}
