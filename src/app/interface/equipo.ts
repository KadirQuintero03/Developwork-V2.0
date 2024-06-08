import { estado } from "./estado";

export class equipo {
  id_equipo: string = '';
  nombre_equipo: string = '';
  NumIntegrantes: string = '';
  estados: estado = new estado();
}
