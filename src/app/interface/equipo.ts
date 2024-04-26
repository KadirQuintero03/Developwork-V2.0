export class equipo {
  id_equipo: string = ''; //Maximo 8 caracteres
  nombre: string = ''; //Maximo 15 caracteres
  descripcion?: string = ''; //Maximo 200 caracteres
  //rol: rol = new rol(); //No existe en la BD
  estado: string = ''; //Dos opciones, activo o inactivo
}
