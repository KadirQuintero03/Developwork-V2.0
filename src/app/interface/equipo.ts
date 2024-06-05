import { estado } from "./estado";

export class equipo {
  id_equipo: string = ''; //Maximo 8 caracteres
  nombre_equipo: string = ''; //Maximo 15 caracteres
  estado: estado = new estado(); //Dos opciones, activo o inactivo
}
