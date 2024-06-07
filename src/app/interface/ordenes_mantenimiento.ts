import { persona } from '../interface/persona';
export class ordenes_matenimiento {
  idOrder: string = '';
  idEquipo: string = '';
  prioridad: string = '';
  estado: string = '';
  idUser: string = '';
  description: string = '';
  personas: persona[] = [];
}
