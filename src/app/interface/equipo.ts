import { estado } from "./estado";

export class equipo {
  idEquipo: string = ''; //Maximo 8 caracteres
  nombreEquipo: string = ''; //Maximo 15 caracteres
  NumIntegrantes: string = '';
  idEstado: estado = new estado(); //Dos opciones, activo o inactivo
}
