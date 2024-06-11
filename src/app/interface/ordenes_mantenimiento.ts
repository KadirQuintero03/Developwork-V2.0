import { persona } from '../interface/persona';
export class ordenes_matenimiento {
  idOrden: string = '';
  descripcion: string = '';
  idEquipo: string = '';
  prioridad: string = '';
  estado: string = '';
  idUser: string = '';
  personas: persona[] = [];
}
