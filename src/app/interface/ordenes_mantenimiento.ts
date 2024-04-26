import { persona } from '../interface/persona';
export class ordenes_matenimiento {
  idOrder: string = '';
  //comentarios: string = '';
  idEquipo: string = '';
  prioridad: string = '';
  estado: string = '';
  idUser: string = ''; //No recuerdo pa' que era xd
  description: string = ''; //no existe en la BD
  personas: persona[] = []; //No recuerdo pa' que era
}
